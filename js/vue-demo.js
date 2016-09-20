new Vue({
    el: '#app',
    components: window.__vc_design__,
    data() {
        var _this = this;
        return {
            // multi-select
            multiDataList: {
                optsList: (function() {
                    var base =[{
                        value: 1,
                        label: 'value1value1value1value1value1',
                        renderLi: function() {
                            return `<a>111value1value1value1value1value1</a>`
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
                })()
            },
            multiResList: [ { "value": 7, "label": "value7" }, { "value": 9, "label": "value9" }, { "value": 17, "label": "value17" }, { "value": 11, "label": "value11" }],
            // tabs
            activeIndex: 2,
            // button group
            buttonGroupList: [{
                text: 'btn1',
                icon: 'android',
                onClick: function() {
                    alert('btn1')
                }
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

            // switch
            switchValue: false,

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

            checkboxResultList: [0, 2],
            radioValue: 0,

            // radio
            radioResultList: [1],
            radioMulResultList: [0, ''],

            // dropdown
            dropDownData: {
                optsList: [{
                    value: 0,
                    label: 0
                }, {
                    value: 1,
                    label: 'value1',
                    renderLi: function() {
                        return `<a>111</a>`
                    }
                }, {
                    value: 2,
                    label: 'value2',
                    isDisabled: true
                }]
            },

            dropDownData2: {
                optsList: [{
                    value: 0,
                    desc: 'value0'
                }, {
                    value: 1,
                    desc: 'value1',
                    renderLi: function() {
                        return `<a>111</a>`
                    }
                }, {
                    value: 2,
                    desc: 'value2',
                    isDisabled: true
                }]
            },

            dropDownValue: 0,

            // table
            table: {
                data: (function() {
                    var res = [];
                    for (var i = 0; i < 50; i++) {
                        res.push({
                            key: i,
                            name: `name${i}`,
                            age: 32,
                            address: `address${i}号`
                        });
                    }

                    return res;
                })(),
                columns: [{
                    title: '姓名',
                    style: {width: '200px'},
                    dataIndex: 'name',
                    render(text, item) {
                        return `<a href="#">${text}</a>`;
                    }
                }, {
                    title: '年龄',
                    dataIndex: 'age'
                }, {
                    title: '住址',
                    dataIndex: 'address'
                }, {
                    title: '操作',
                    hasPartial: true,
                    render(text, item) {
                        Vue.partial('xxx', `<a class="vc-inline" @click="showTipsWay2">操作一</a>
                        <span class="vc-divider"></span>
                      <a class="vc-inline">操作二</a>`);

                        return {
                            id: 'xxx',
                            functions: {
                                showTipsWay2: _this.showTipsWay2
                            }
                        };
                    }
                }]
            },

            // slider
            sliderValue: 10,

            // edit table
            tableEdit: {
                'data': [{
                    columnName: 'name',
                    columnType: 'string',
                    columnDesc: 'init',
                    isPartition: true

                }]
            },

            // staff
            staff: {
                data : [
                    {userId:1, userName: 'hill'},
                    {userId:2, userName: 'shijia'},
                    {userId:3, userName: 'zac'},
                    {userId:4, userName: 'admin'}
                ],
                selected : [{
                    userId : 1,
                    userName : 'hill'
                },{
                    userId : 2,
                    userName : 'shijia'
                }],
                disabled : [{
                    userId : 100,
                    userName : 'admin'
                }]
            },

            // loading
            showGlobalLoading: false,
            showPartLoading: false,

            // steps
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

            // time line
            timeLineData: ['我们发布了alpha \n\r 再试试', '我们发布了beta'],

            // tagList
            tagList: [{
                content: '内容'
            }],
            // 树
            tree: {
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
            },
            // 穿梭框
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

            // 搜索框
            search: '',

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
            sliderValue2: 50
        }
    },

    methods: {
        switchChange(value) {
            console.log('Tab switch result is :', value)
        },

        buttonClick() {
            console.log('u has been click')
        },

        // tips show way 1
        showTips(id) {
            this.$root.$$tips[id].show();
        },

        showTipsWay2() {
            window.Tips.init('', 'info', 'lalalala');
        },

        // alert
        showAlert(id) {
            this.$root.$$alert[id].show();
        },

        showAlert2() {
            window.Alert.init({
                type: 'info',
                title: '我是标题',
                explain: '我是说明文字',
                isCloseAble: true
            });
        },

        // message box
        showMb(id) {
            this.$root.$$messageBox[id].show();
        },

        showMb2(id) {
            window.MessageBox.init({
                type: 'confirm',
                title: '标题',
                explain: '我就是一个解释!',
                onOk() {
                    console.log('我是OK!');
                }
            });
        },

        // 展示对话框
        showDialog(id) {
            this.$root.$$dialog[id].show();
        },

        dialogCallbackFn1() {
            alert('ok callback !');
        },

        dialogCallbackFn2() {
            alert('cancel callback !');
        },

        showLoading(value) {
            var _this = this;

            _this['show' + value + 'Loading'] = true;

            setTimeout(function() {
                _this['show' + value + 'Loading'] = false;
            }, 2000);
        }
    },

    ready() {
        // 动态化兼容测试
        var _this = this;
        setTimeout(function() {
            _this.activeIndex = 1;
            // checkbox / radio 测试
            _this.commonListData = [{
                value: 0,
                label: 'value1'
            }, {
                value: 1,
                label: '<a>222</a>'
            }, {
                value: 2,
                label: 'value2',
                isDisabled: true
            }];

            // dropdown
            _this.dropDownData = {
                optsList: [{
                    value: 0,
                    label: 'change1'
                }, {
                    value: 1,
                    label: 'change2',
                    renderLi: function() {
                        return `<a>222</a>`
                    }
                }, {
                    value: 2,
                    label: 'change3',
                    isDisabled: true
                }]
            };
        }, 3000);
    }
});