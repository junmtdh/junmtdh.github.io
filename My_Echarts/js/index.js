// 柱状图模块1    左上
(function() {
    // 1实例化对象
var myChart = echarts.init(document.querySelector(".bar .chart"));
let dataX= ['餐饮', '教育', '建筑', '医疗', '电商', '金融', '其它']
let dataY =[10, 70, 48, 35, 92, 78, 63]
let dataY1 =[250, 800, 350, 900, 1500, 1200, 666]
var option = {
    //backgroundColor: '#2f89cf',
    color: ["#2f89cf"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                dataX[params[0].dataIndex] +
                '<br/>就业满意度：' +
                dataY[params[0].dataIndex] +
                '%' +
                '<br> 行业人数：' +
                dataY1[params[0].dataIndex] +
                '人'
            );
        },
    },
    grid: {
        top: '10px',
        bottom: '5%',
        left: '0%',
        right: '0%',
        containLabel: true,
    },
    //图例组件
    legend: {
        data: ['行业人数', '满意率'],
        left: '45px',
        top: '0',
        orient: 'vertical',
        // 图例每项之间的间隔
        itemGap:10,
        textStyle: {
            padding:[0,0,0,0],
            color: '33FFFF',
        },
        itemWidth: 10,
        itemHeight: 5,
        //itemGap: 25,
    },
    xAxis: {
        type: 'category',
        data: dataX,
        axisLine: {
            lineStyle: {
                color: 'rgba(66, 192, 255, .3)',
            },
        },
        
        axisLabel: {
        rotate: -45,
            textStyle: {
                color: '#33FFFF',
            },
        },
    },

    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#5FBBEB',
                },
            },
            axisLine: {
                lineStyle: {
                    fontSize:12,
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
        },
        {
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: '#d2d2d2',
            },
            max:'100',
            min:'0',
            scale: true,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    fontSize:12,
                    color: '#42C0FF',
                },
            },
        },
    ],
    series: [
        {
            name: '行业人数',
            type: 'bar',
            barWidth: '15px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#29acff',
                        },
                        {
                            offset: 1,
                            color: '#4bdfff',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            data: dataY1,
        },
        {
            name: '满意率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示

            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                normal: {
                    color: '#ffa43a',
                    borderColor: 'rgba(255, 234, 0, 0.5)', //圆点透明 边框
                    borderWidth: 5,
                },
            },
            lineStyle: {
                color: '#ffa43a',
            },

            data: dataY,
        },
    ],
};
    // 3. 把配置项给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });

  })();


  



  // 柱状图2  右上
  (function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2. 指定配置和数据
    var option = {
      grid: {
        top: "10%",
        left: "22%",
        bottom: "10%"
        // containLabel: true
      },
      // 不显示x轴的相关信息
      xAxis: {
        show: false
      },
      yAxis: [
        {
          type: "category",
          inverse: true,
          data: ["软件工程", "计科", "大数据", "物联网", "人工智能"],
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        },
        {
          data: [310, 281, 195, 155, 210],
          inverse: true,
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        }
      ],
      series: [
        {
          name: "条",
          type: "bar",
          data: [85, 83, 73, 66, 70],
          yAxisIndex: 0,
          // 修改第一组柱子的圆角
          itemStyle: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            color: function(params) {
              // params 传进来的是柱子对象
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            }
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 显示柱子内的文字
          label: {
            show: true,
            position: "inside",
            // {c} 会自动的解析为 数据  data里面的数据
            formatter: "{c}%"
          }
        },
        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100],
          itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();






  // 折线图1模块制作   左中
  (function() {
    var yearData = [
      {
        year: "2021", // 年份
        data: [
          // 两个数组是因为有两条线
          [24, 40, 101, 84, 90, 230, 123],
          [40, 64, 191, 324, 190, 330, 110]
        ]
      },
      {
        year: "2022", // 年份
        data: [
          // 两个数组是因为有两条线
          [123, 175, 112, 97, 121, 267, 98],
          [143, 131, 165, 123, 178, 221, 82]
        ]
      }
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置
    var option = {
      // 通过这个color修改两条线的颜色
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        // 如果series 对象有name 值，则 legend可以不用写data
        // 修改图例组件 文字颜色
        textStyle: {
          color: "#EEE8AA"
        },
        // 这个10% 必须加引号
        right: "10%"
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
  
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "建筑管理学院",
          "电气工程学院",
          "经济管理学院",
          "人工智能学院",
          "艺术传媒学院",
          "人文学院",
          "体育学院"
          
        ],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          fontWeight: "lighter",
          color: "#ffff00", // 文本颜色
          fontSize:6,
        },
        axisLine: {
          show: false // 去除轴线
        },
  
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
          name: "考研人数",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: yearData[0].data[0]
        },
        {
          name: "考公人数",
          type: "line",
          smooth: true,
          data: yearData[0].data[1]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 5.点击切换效果
    $(".line h2").on("click", "a", function() {
      // alert(1);
      // console.log($(this).index());
      // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
      // console.log(yearData[$(this).index()]);
      var obj = yearData[$(this).index()];
      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1];
      // 需要重新渲染
      myChart.setOption(option);
    });
    



   /*******高亮显示开始**********/
   var _this2 = this
   var isSet2 = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
   var currentIndex2 = 0
 
   // 2、鼠标移动上去的时候的高亮动画
   myChart.on('mouseover', function (param) {
     isSet2 = false
     clearInterval(_this2.startCharts)
     // 取消之前高亮的图形
     myChart.dispatchAction({
       type: 'downplay',
       seriesIndex: 0,
       dataIndex: currentIndex2
     })
     // 高亮当前图形
     myChart.dispatchAction({
       type: 'highlight',
       seriesIndex: 0,
       dataIndex: param.dataIndex
     })
     // 显示 tooltip
     myChart.dispatchAction({
       type: 'showTip',
       seriesIndex: 0,
       dataIndex: param.dataIndex
     })
   })
   // 3、自动高亮展示
   chartHover = function () {
     var dataLen = myChart.getOption().series[0].data.length
     // 取消之前高亮的图形
     myChart.dispatchAction({
       type: 'downplay',
       seriesIndex: 0,
       dataIndex: currentIndex2
     })
     currentIndex2 = (currentIndex2 + 1) % dataLen
     // 高亮当前图形
     myChart.dispatchAction({
       type: 'highlight',
       seriesIndex: 0,
       dataIndex: currentIndex2
     })
     // 显示 tooltip
     myChart.dispatchAction({
       type: 'showTip',
       seriesIndex: 0,
       dataIndex: currentIndex2
     })
   }
   _this2.startCharts = setInterval(chartHover, 2000)
   // 4、鼠标移出之后，恢复自动高亮
   myChart.on('mouseout', function (param) {
     if (!isSet2) {
       _this2.startCharts = setInterval(chartHover, 1000)
       isSet2 = true
     }
   })
   /*******高亮显示结束**********/

  })();







 // 饼形图2 工作职位类别模块  首页右中
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "-2%",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 4.5,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "工作职位类别",
        type: "pie",
        radius: ["10%", "50%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 16
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 89, name: "Web开发" },
          { value: 142, name: "软件测试" },
          { value: 121, name: "网络安全" },
          { value: 88, name: "全栈开发" },
          { value: 162, name: "自媒体" },
          { value: 138, name: "公务员" },
          { value: 81, name: "律师" },
          { value: 18, name: "新闻媒体" }

        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数

  /*******高亮显示开始**********/
  var _this2 = this
  var isSet2 = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
  var currentIndex2 = 0

  // 2、鼠标移动上去的时候的高亮动画
  myChart.on('mouseover', function (param) {
    isSet2 = false
    clearInterval(_this2.startCharts)
    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: currentIndex2
    })
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: param.dataIndex
    })
    // 显示 tooltip
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: param.dataIndex
    })
  })
  // 3、自动高亮展示
  chartHover = function () {
    var dataLen = myChart.getOption().series[0].data.length
    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: currentIndex2
    })
    currentIndex2 = (currentIndex2 + 1) % dataLen
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: currentIndex2
    })
    // 显示 tooltip
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex2
    })
  }
  _this2.startCharts = setInterval(chartHover, 1000)
  // 4、鼠标移出之后，恢复自动高亮
  myChart.on('mouseout', function (param) {
    if (!isSet2) {
      _this2.startCharts = setInterval(chartHover, 1000)
      isSet2 = true
    }
  })
  /*******高亮显示结束**********/

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();







// 饼形图2 地区分布模块   左下
(function() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var m2R2Data= [
    {value:235, legendname:'建筑学',name:"建筑学  235",itemStyle:{color:"#8d7fec"}},
    {value:210, legendname:'土木工程',name:"土木工程  210",itemStyle:{color:"#5085f2"}},
    {value:134, legendname:'电气工程自动化',name:"电气工程自动化  134",itemStyle:{color:"#e75fc3"}},
    {value:154, legendname:'工程造价',name:"工程造价  154",itemStyle:{color:"#f87be2"}},
    {value:310, legendname:'软件工程',name:"软件工程  310",itemStyle:{color:"#f2719a"}},
    {value:281, legendname:'计算机科学与技术',name:"计算机科学与技术  281",itemStyle:{color:"#fca4bb"}},
    {value:300, legendname:'会计学',name:"会计学  300",itemStyle:{color:"#f59a8f"}},
    {value:205, legendname:'英语',name:"英语 205",itemStyle:{color:"#fdb301"}},
    {value:110, legendname:'人工智能',name:"人工智能  110",itemStyle:{color:"#57e7ec"}},
    {value:135, legendname:'法学',name:"法学  135",itemStyle:{color:"#cf9ef1"}},   
    {value:205, legendname:'人力资源',name:"人力资源  205",itemStyle:{color:"#57e7ec"}},
    {value:95, legendname:'艺术设计',name:"艺术设计  95",itemStyle:{color:"#cf9ef1"}}, 
 ];


option = {
  title: [
  {
    left: "2%"
  },    
  {
    text: '合计',
    subtext: 2374+'人',
    textStyle:{
    fontSize:10,
    color:"white"
},
  subtextStyle: {
    fontSize: 10,
    color: 'white'
  },
  textAlign:"center",
    x: '34.5%',
    y: '44%',
  }],
  tooltip: {
    trigger: 'item',
    formatter:function (parms){
    var str=  parms.seriesName+"</br>"+
    parms.marker+""+parms.data.legendname+"</br>"+
    "人数："+ parms.data.value+'人'+"</br>"+
    "占比："+ parms.percent+"%";
    return  str ;
  }
  },
      legend: {
        type:"scroll",
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'0',
        itemHeight:10,
        itemGap: 8,
        
        pageButtonPosition:'start',
        textStyle: {
        color:'#8C8C8C'
      },
  height:200
},
series: [
{
 name:'标题',
 type:'pie',
 center: ['35%', '50%'],
 radius: ['40%', '65%'],
  clockwise: false, //饼图的扇区是否是顺时针排布
 avoidLabelOverlap: false,
 label: {
     normal: {
         show: true,
         position: 'outter',
          formatter:function (parms){
              return parms.data.legendname
          }
     }
 },
 labelLine: {
     normal: {
       length:5,
       length2:3,
       smooth:true,
     }
 },
 data:m2R2Data
}
]
};
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();






  // 折线图 右下
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));

  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,   //坐标轴从0开始
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: ["2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000"]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "第一年薪资统计",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [170, 370, 300, 208, 100, 80, 50, 50],

        markArea: {
          data: [
            [
              { xAxis: '3000' }, { xAxis: '4000' }
            ]
          ]
        }
      }
      ,
      {
        name: "第二年薪资统计",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [30, 80, 190, 130, 233, 120, 116, 101],

        markArea: {
          data: [
            [
              { xAxis: '5000' }, { xAxis: '6000' }
            ]
          ]
        }
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
  
  




  // 模拟飞行路线模块地图模块
  (function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      东莞: [113.8953, 22.901],
      东营: [118.7073, 37.5513],
      中山: [113.4229, 22.478],
      临汾: [111.4783, 36.1615],
      临沂: [118.3118, 35.2936],
      丹东: [124.541, 40.4242],
      丽水: [119.5642, 28.1854],
      乌鲁木齐: [87.9236, 43.5883],
      佛山: [112.8955, 23.1097],
      保定: [115.0488, 39.0948],
      兰州: [103.5901, 36.3043],
      包头: [110.3467, 41.4899],
      北京: [116.4551, 40.2539],
      北海: [109.314, 21.6211],
      南京: [118.8062, 31.9208],
      南宁: [108.479, 23.1152],
      南昌: [116.0046, 28.6633],
      南通: [121.1023, 32.1625],
      厦门: [118.1689, 24.6478],
      台州: [121.1353, 28.6688],
      合肥: [117.29, 32.0581],
      呼和浩特: [111.4124, 40.4901],
      咸阳: [108.4131, 34.8706],
      哈尔滨: [127.9688, 45.368],
      唐山: [118.4766, 39.6826],
      嘉兴: [120.9155, 30.6354],
      大同: [113.7854, 39.8035],
      大连: [122.2229, 39.4409],
      天津: [117.4219, 39.4189],
      太原: [112.3352, 37.9413],
      威海: [121.9482, 37.1393],
      宁波: [121.5967, 29.6466],
      宝鸡: [107.1826, 34.3433],
      宿迁: [118.5535, 33.7775],
      常州: [119.4543, 31.5582],
      广州: [113.5107, 23.2196],
      廊坊: [116.521, 39.0509],
      延安: [109.1052, 36.4252],
      张家口: [115.1477, 40.8527],
      徐州: [117.5208, 34.3268],
      德州: [116.6858, 37.2107],
      惠州: [114.6204, 23.1647],
      成都: [103.9526, 30.7617],
      扬州: [119.4653, 32.8162],
      承德: [117.5757, 41.4075],
      拉萨: [91.1865, 30.1465],
      无锡: [120.3442, 31.5527],
      日照: [119.2786, 35.5023],
      昆明: [102.9199, 25.4663],
      杭州: [119.5313, 29.8773],
      枣庄: [117.323, 34.8926],
      柳州: [109.3799, 24.9774],
      株洲: [113.5327, 27.0319],
      武汉: [114.3896, 30.6628],
      汕头: [117.1692, 23.3405],
      江门: [112.6318, 22.1484],
      沈阳: [123.1238, 42.1216],
      沧州: [116.8286, 38.2104],
      河源: [114.917, 23.9722],
      泉州: [118.3228, 25.1147],
      泰安: [117.0264, 36.0516],
      泰州: [120.0586, 32.5525],
      济南: [117.1582, 36.8701],
      济宁: [116.8286, 35.3375],
      海口: [110.3893, 19.8516],
      淄博: [118.0371, 36.6064],
      淮安: [118.927, 33.4039],
      深圳: [114.5435, 22.5439],
      清远: [112.9175, 24.3292],
      温州: [120.498, 27.8119],
      渭南: [109.7864, 35.0299],
      湖州: [119.8608, 30.7782],
      湘潭: [112.5439, 27.7075],
      滨州: [117.8174, 37.4963],
      潍坊: [119.0918, 36.524],
      烟台: [120.7397, 37.5128],
      玉溪: [101.9312, 23.8898],
      珠海: [113.7305, 22.1155],
      盐城: [120.2234, 33.5577],
      盘锦: [121.9482, 41.0449],
      石家庄: [114.4995, 38.1006],
      福州: [119.4543, 25.9222],
      秦皇岛: [119.2126, 40.0232],
      绍兴: [120.564, 29.7565],
      聊城: [115.9167, 36.4032],
      肇庆: [112.1265, 23.5822],
      舟山: [122.2559, 30.2234],
      苏州: [120.6519, 31.3989],
      莱芜: [117.6526, 36.2714],
      菏泽: [115.6201, 35.2057],
      营口: [122.4316, 40.4297],
      葫芦岛: [120.1575, 40.578],
      衡水: [115.8838, 37.7161],
      衢州: [118.6853, 28.8666],
      西宁: [101.4038, 36.8207],
      西安: [109.1162, 34.2004],
      贵阳: [106.6992, 26.7682],
      连云港: [119.1248, 34.552],
      邢台: [114.8071, 37.2821],
      邯郸: [114.4775, 36.535],
      郑州: [113.4668, 34.6234],
      鄂尔多斯: [108.9734, 39.2487],
      重庆: [107.7539, 30.1904],
      金华: [120.0037, 29.1028],
      铜川: [109.0393, 35.1947],
      银川: [106.3586, 38.1775],
      镇江: [119.4763, 31.9702],
      长春: [125.8154, 44.2584],
      长沙: [113.0823, 28.2568],
      长治: [112.8625, 36.4746],
      阳泉: [113.4778, 38.0951],
      青岛: [120.4651, 36.3373],
      韶关: [113.7964, 24.7028]
    };
  
    var XAData = [
      [{ name: "重庆" }, { name: "拉萨", value: 100 }],
      [{ name: "重庆" }, { name: "金华", value: 120 }],
      [{ name: "重庆" }, { name: "广州", value: 180 }],
      [{ name: "重庆" }, { name: "乌鲁木齐", value: 10 }],
      [{ name: "重庆" }, { name: "银川", value: 10 }]
    ];
  
    var XNData = [
      [{ name: "重庆" }, { name: "北京", value: 100 }],
      [{ name: "重庆" }, { name: "上海", value: 330 }],
      [{ name: "重庆" }, { name: "天津", value: 130 }],
      [{ name: "重庆" }, { name: "深圳", value: 520 }],
      [{ name: "重庆" }, { name: "成都", value: 100 }]
    ];
  
    var YCData = [
      [{ name: "重庆" }, { name: "潍坊", value: 100 }],
      [{ name: "重庆" }, { name: "哈尔滨", value: 100 }],
      [{ name: "重庆" }, { name: "昆明", value: 100 }],
      [{ name: "重庆" }, { name: "重庆", value: 300 }],
      [{ name: "重庆" }, { name: "兰州", value: 100 }]
    ];
  
    var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
  
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };
  
    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    var series = [];
    [
      ["深圳", XAData],
      ["上海", XNData],
      ["重庆", YCData]
    ].forEach(function(item, i) {
      series.push(
        {
          name: item[0] + " Top1",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top2",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
      );
    });
    var option = {
      tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
      legend: {
        orient: "vertical",
        top: "bottom",
        left: "right",
        data: ["深圳 Top1", "上海 Top2", "重庆 Top3"],
        textStyle: {
          color: "#fff"
        },
        selectedMode: "multiple"
      },
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.2,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: series
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  