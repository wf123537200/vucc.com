new Vue({
    el: '#app',
    components: window.__vc_design__,
    data: function () {
        var _this = this;
        return {
            // button group
            buttonGroupList: [{
                text: 'btn1',
                icon: 'android'
            }, {
                text: 'btn2',
                icon: 'apple',
                isSelected: true,
                onClick: function() {
                    alert('btn2')
                }
            }, {
                text: 'btn3',
                icon: 'android',
                onClick: function() {
                    alert('btn3')
                },
                isDisabled: true
            }],
            value: true,
            checkboxResultList: [0, 2],
            // checkbox / radio data
            commonListData: [{
                value: 0,
                label: 'value0'
            }, {
                value: 1,
                label: '<a>111</a>'
            }, {
                value: 2,
                label: 'value1',
                isDisabled: true
            }],

            commonListData2: [{
                name: 0,
                desc: 'value0'
            }, {
                name: 1,
                desc: '<a>111</a>'
            }, {
                name: 2,
                desc: 'value1',
                isDisabled: true
            }],
            // datapicker
            rangeData: {
                endTime: '2016-10-30',
                startTime: '2016-09-27',
            },
            time1: '',
            time: '2015/12/12',
            // dialog
            show: false,
            // loading
            showGlobalLoading: false,
            showPartLoading: false,
            search: '',
            // multi-select
            multiDataList: (function() {
                var base =[{
                    value: 1,
                    label: 'value1value1value1value1value1',
                    renderLi: function() {
                        return '<a>111value1value1value1value1value1</a>'
                    }
                }, {
                    value: 2,
                    label: 'value2disabledvalue2disabled',
                    isDisabled: true
                }];

                var other = [];
                for(var i = 0; i < 30; i++) {
                    other.push({
                        value: i,
                        label: 'value' + i
                    })
                }

                return base.concat(other);
            })(),
            multiResList: [ { "value": 7, "label": "value7" }, { "value": 9, "label": "value9" }, { "value": 17, "label": "value17" }, { "value": 11, "label": "value11" }],
            currentPage: 5,
            // radio
            radioValue: 0,
            radioResultList: [1],
            radioMulResultList: [0, ''],
            // search
            search: '',
            // select
            dropDownData: [{
                value: 0,
                label: 0
            }, {
                value: 1,
                label: 'value1',
                renderLi: function () {
                    return '<a>111</a>'
                }
            }, {
                value: 2,
                label: 'value2',
                isDisabled: true
            }],

            dropDownData2: [{
                value: 0,
                desc: 'value0'
            }, {
                value: 1,
                desc: 'value1',
                renderLi: function () {
                    return '<a>111</a>'
                }
            }, {
                value: 2,
                desc: 'value2',
                isDisabled: true
            }],

            dropDownValue: 0,
            // slider
            sliderValue: 10,
            sliderValue2: 50,
            // 固定点阵的滑动输入条
            sliderValueList: [{
                label: '0ms',
                value: 0
            }, {
                label: '25ms',
                value: 25
            }, {
                label: '50ms',
                value: 50
            }, {
                label: '100ms',
                value: 100
            }, {
                label: '200ms',
                value: 200
            }, {
                label: '400ms',
                value: 400
            }, {
                label: '1s',
                value: 1000
            }, {
                label: '2s',
                value: 2000
            }],
            radioValue: 20,
            // step
            stepsData: [{
                order: 1,
                title: '完成',
                explain: '说明文字',
                isFinished: true
            }, {
                order: 2,
                title: '进行中',
                explain: '说明文字',
                isActive: true
            }, {
                order: 3,
                title: '默认尺寸',
                explain: '说明文字'
            }],
            // switch
            switchValue: false,
            // table
            table: {
                data: (function() {
                    var res = [];
                    for (var i = 0; i < 50; i++) {
                        res.push({
                            key: i,
                            name: 'name' + i,
                            age: 32,
                            address: 'address' + i + '号'
                        });
                    }

                    return res;
                })()
            },
            // tabs
            activeIndex: 2,
            // tag-list
            tagList: [{
                content: '内容'
            }],
            tagList2: [{
                tags: '内容'
            }],
            // time-line
            timeLineData: ['<a style="color: red;">我们发布了alpha \n\r 再试试</a>', '我们发布了beta'],
            // transfer
            transfer: [{
                content: '我是选择框Aaa',
                isChecked: true
            }, {
                content: '我是选择框Bbb'
            }],
            transferRes: [{
                content: '我是选择框Ccc',
                isChecked: true
            }],
            tree: {
                onItemClick: function() {
                    console.log(arguments);
                },
                isHasCheckbox: true,
                leafs: [{
                    isOpened: true,
                    isChecked: true,
                    isDisabled: true,
                    content: '文本内容1'
                }, {
                    content: '文本内容2',
                    subTree: {
                        isHasCheckbox: true,
                        leafs: [{
                            content: '文本内容1'
                        }, {
                            content: '文本内容2'
                        }]
                    }
                }]
            }
        }
    },
    mounted: function () {
        $('.vcode').find('br').remove();

        $('.rcode').find('.showcode').click(function() {
            var codeDiv = $(this).siblings('div');
            if(codeDiv.hasClass('show')) {
                $(this).next('br').show();
                codeDiv.removeClass('show').addClass('hide');
            } else {
                $(this).next('br').hide();
                codeDiv.removeClass('hide').addClass('show');
            }
        })
    },
    methods: {
        // tips show way 1
        showTips: function(id) {
            document.body.$$tips[id].show();
        },

        showTipsWay2: function() {
            window.Tips.init('', 'info', 'lalalala');
        },
        // tag-list
        onBeforeAdd: function(next) {
            console.log('before add function is trigger!');
            next();
        },
        // loading
        showLoading: function(value) {
            var _this = this;

            _this['show' + value + 'Loading'] = true;

            setTimeout(function() {
                _this['show' + value + 'Loading'] = false;
            }, 2000);
        },
        // checkbox
        switchChange: function(value) {
            console.log('Tab switch result is :', value)
        },
        // dialog
        // 展示对话框
        showDialog: function(id) {
            this.$root.$$dialog[id].show();
        },

        showDialog2: function() {
            this.show = true;
        },

        dialogCallbackFn1: function() {
            alert('ok callback !');
        },

        dialogCallbackFn2: function() {
            alert('cancel callback !');
        },
        // datapicker
        disableFilter: function(date) {
            if(this.xx) {
                return date.getDay() === 0 || date.getDay() === 6;
            } else {
                return false;
            }
        },
        // alert
        showAlert: function(id) {
            document.body.$$alert[id].show();
        },

        showAlert2: function() {
            window.Alert.init({
                type: 'info',
                title: '我是标题',
                explain: '我是说明文字',
                isCloseAble: true
            });
        },
        // message box
        showMb: function(id) {
            this.$root.$$messageBox[id].show();
        },

        showMb2: function(id) {
            window.MessageBox.init({
                type: 'confirm',
                title: '标题',
                explain: '我就是一个解释!',
                onOk: function() {
                    console.log('我是OK!');
                }
            });
        },
        buttonClick: function() {
            console.log('u has been click')
        },
        onPageChange: function(val) {
            this.currentPage = val;
        },
        onChange: function(value, vm) {
            console.log(arguments);
        },
        renderHeader: function() {
            return '我是渲染函数渲染的';
        },
        clickX: function() {
            console.log(arguments)
        },
        sortFn: function(data, sort) {
            data.sort(function(a, b) {
                return sort ? b.index - a.index : a.index - b.index;
            })
        }
    }
});