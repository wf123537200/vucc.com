(function () {

	var markdown = getUrlParam('markdown');

	if (markdown) {
		markdown = 'markdown/' + markdown + '.md';
		getMarkDownFile(markdown);
	} else {
		markdown = $('script[type=markdown]').attr('src');
		if(markdown) {
			getMarkDownFile(markdown);
		}else {
			$('#markdown-preview').html('markdown文件未找到 或 url路径没有标明markdown文件名');
		}
	}

	function markdown2html (code) {
		/*
		pedantic: Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
		gfm: Enable github flavored markdown (enabled by default).
		sanitize: Sanitize the output. Ignore any HTML that has been input.
		highlight: A callback to highlight code blocks.
		tables: Enable GFM tables. This is enabled by default. (Requires the gfm option in order to be enabled).
		breaks: Enable GFM line breaks. Disabled by default.
		smartLists: Use smarter list behavior than the original markdown. Disabled by default. May eventually be default with the old behavior moved into pedantic.
		smartypants: Use "smart" typograhic punctuation for things like quotes and dashes.
		langPrefix: Set the prefix for code block classes. Defaults to lang-.
		*/
		marked.setOptions({
		  gfm: true,
		  tables: true,
		  breaks: false,
		  pedantic: false,
		  sanitize: false,
		  smartLists: true,
		  smartypants: false,
		  langPrefix: 'language-',
		  highlight: function(code, lang) {
		    if (lang === 'js') {
		      return highlighter.javascript(code);
		    }
		    return code;
		  }
		});
		return marked(code);
	};

	function getUrlParam (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg);  //匹配目标参数
      if (r != null) return unescape(r[2]); return null; //返回参数值
  };

	function getMarkDownFile (src) {
		$.get(src, function (data) {
			data = markdown2html(data);
			$('#markdown-preview').html(data);

			initSubNav();
		});
	};

	function initSubNav() {
		var $titles = $('#markdown-preview > h2'),
				navHtml = [];

		for(var i = 0; i < $titles.length; i++) {
			$titles.eq(i).attr('id', 'title' + i);
			navHtml.push('<li><a href="#title' + i + '">' + $titles.eq(i).html() + '</a></li>');
		}

		$('#subbar-nav').html(navHtml.join(''));
	}

	window.getUrlParam = getUrlParam;
})();
