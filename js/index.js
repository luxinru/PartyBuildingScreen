window.onload = function () {
  // 在这里执行您想要在页面及其资源加载完成后进行的操作

  /**
   * 获取当前时间
   * start
   */
  const timeDom = document.getElementById("time");
  const dateDom = document.getElementById("date");
  const weekDom = document.getElementById("week");
  const [time, date, dayOfWeek] = getCurrentTime();
  timeDom.innerText = time;
  dateDom.innerText = date;
  weekDom.innerText = dayOfWeek;
  setInterval(() => {
    const [time, date, dayOfWeek] = getCurrentTime();
    timeDom.innerText = time;
    dateDom.innerText = date;
    weekDom.innerText = dayOfWeek;
  }, 1 * 1000);
  /**
   * end
   */

  /**
   * 经济效益
   */
  const chart1 = document.getElementById("chart1");
  getChart1Data(chart1);

  /**
   * 季度排行榜
   */
  const chart2 = document.getElementById("chart2");
  getChart2Data(chart2);
  const chart3 = document.getElementById("chart3");
  getChart3Data(chart3);

  /**
   * 党建升阶目标
   */
  const chart5 = document.getElementById("chart5");
  getChart5Data(chart5);

  /**
   * 党建升阶目标
   */
  const chart6 = document.getElementById("chart6");
  getChart6Data(chart6);
  /**
   * 产量运行
   */
  const chart4 = document.getElementById("chart4");
  getChart4Data(chart4);
  const chart7 = document.getElementById("chart7");
  getChart7Data(chart7);
};

function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour12: false });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
}

function formatDayOfWeek(date) {
  const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
  const dayIndex = date.getDay();
  return `星期${daysOfWeek[dayIndex]}`;
}

function getCurrentTime() {
  const now = new Date();
  const time = formatTime(now);
  const date = formatDate(now);
  const dayOfWeek = formatDayOfWeek(now);
  return [time, date, dayOfWeek];
}

function getChart1Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "5%",
      left: "3%",
      itemWidth: 6,
      itemHeight: 6,
      data: ["成本(万元)", "利润(万元)", "盈利平衡点"],
      itemStyle: {
        borderWidth: 0,
      },
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "3%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 207, 144, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 207, 144, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
      },
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
          // lineStyle: {
          //   color: "rgba(255, 207, 144, 1)",
          // },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
      },
    ],
    series: [
      {
        name: "成本(万元)",
        yAxisIndex: 0,
        type: "bar",
        barGap: 0,
        barWidth: 15,
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 320, 332],
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 56, 56, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 104, 104, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      {
        name: "利润(万元)",
        yAxisIndex: 0,
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 320, 332, 301, 334, 390, 320, 332],
        barWidth: 15,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 175, 100, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 166, 122, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      {
        name: "盈利平衡点",
        yAxisIndex: 1,
        type: "line",
        data: [9, 5, 4, 6, 2, 7, 8, 2, 1, 4, 7, 9],
        lineStyle: {
          color: "rgba(42, 163, 255, 1)",
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "rgba(42, 163, 255, 1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart2Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - 9, shape.y - 9];
      const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath();
    },
  });
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
      const c4 = [shape.x + 18, shape.y - 9];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + 18, shape.y - 9];
      const c3 = [shape.x + 9, shape.y - 18];
      const c4 = [shape.x - 9, shape.y - 9];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  echarts.graphic.registerShape("CubeLeft", CubeLeft);
  echarts.graphic.registerShape("CubeRight", CubeRight);
  echarts.graphic.registerShape("CubeTop", CubeTop);
  const MAX = [680, 680, 680, 680, 680];
  var echartData = {
    xData: [
      "机关第一党支部",
      "机关第二党支部",
      "机关第三党支部",
      "机关第四党支部",
    ],
    valueData: [500, 480, 450, 410],
  };

  // 指定图表的配置项和数据
  const option = {
    axisPointer: {
      show: true,
      type: "shadow",
    },
    grid: {
      left: "3%",
      right: "3%",
      bottom: "3%",
      top: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: echartData.xData,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: "rgba(196, 101, 85, 1)",
        interval: 0,
        // width: 60,
        // align: 'center',
        // overflow: 'truncate'
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
            ],
          };
        },
        data: [600, 600, 600, 600, 600],
      },
      {
        type: "custom",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(4, 74, 255, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(26, 87, 245, 1)",
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(56, 144, 251, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(36, 87, 245, 1)",
                    },
                  ]),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(56, 142, 251, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(56, 142, 251, 1)",
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: echartData.valueData,
      },
      {
        type: "bar",
        label: {
          show: true,
          position: "top",
          color: "rgba(223, 15, 20, 1)",
          fontSize: 18,
          offset: [4, 0],
          formatter: function(data) {
            return echartData.valueData[data.dataIndex];
          },
        },
        itemStyle: {
          color: "transparent",
        },
        data: MAX,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart3Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - 9, shape.y - 9];
      const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath();
    },
  });
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
      const c4 = [shape.x + 18, shape.y - 9];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + 18, shape.y - 9];
      const c3 = [shape.x + 9, shape.y - 18];
      const c4 = [shape.x - 9, shape.y - 9];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  echarts.graphic.registerShape("CubeLeft", CubeLeft);
  echarts.graphic.registerShape("CubeRight", CubeRight);
  echarts.graphic.registerShape("CubeTop", CubeTop);
  const MAX = [680, 680, 680, 680, 680];
  var echartData = {
    xData: [
      "采油管理一区党支部",
      "采油管理二区党支部",
      "采油管理三区党支部",
      "油气集输管理中心党支部",
      "采油管理四区党支部",
    ],
    valueData: [500, 480, 450, 410, 380],
  };

  // 指定图表的配置项和数据
  const option = {
    axisPointer: {
      show: true,
      type: "shadow",
    },
    grid: {
      left: "3%",
      right: "3%",
      bottom: "3%",
      top: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: echartData.xData,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: "rgba(196, 101, 85, 1)",
        interval: 0,
        width: 60,
        align: "center",
        overflow: "truncate",
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: "rgba(223, 15, 20, 0.1)",
                },
              },
            ],
          };
        },
        data: [600, 600, 600, 600, 600],
      },
      {
        type: "custom",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(4, 74, 255, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(26, 87, 245, 1)",
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(56, 144, 251, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(36, 87, 245, 1)",
                    },
                  ]),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgba(56, 142, 251, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(56, 142, 251, 1)",
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: echartData.valueData,
      },
      {
        type: "bar",
        label: {
          show: true,
          position: "top",
          color: "rgba(223, 15, 20, 1)",
          fontSize: 18,
          offset: [4, 0],
          formatter: function(data) {
            return echartData.valueData[data.dataIndex];
          },
        },
        itemStyle: {
          color: "transparent",
        },
        data: MAX,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart5Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "5%",
      left: "3%",
      itemWidth: 6,
      itemHeight: 6,
      data: ["五星", "四星", "三星"],
      itemStyle: {
        borderWidth: 0,
      },
    },
    grid: {
      top: "30%",
      left: "3%",
      right: "3%",
      bottom: "20px",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 207, 144, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
          margin: 20,
        },
        data: ["2024", "2025", "2026"],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 207, 144, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
      },
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
          // lineStyle: {
          //   color: "rgba(255, 207, 144, 1)",
          // },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
      },
    ],
    series: [
      {
        name: "三星",
        stack: true,
        type: "bar",
        data: [1, 2, 1],
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(114, 157, 53, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(114, 157, 53, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          shadowBlur: 10,
          shadowColor: "rgba(114, 157, 53, 1)",
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 14,
        },
        barWidth: "60%",
        barGap: "0%",
        barCategoryGap: "0%",
      },
      {
        name: "四星",
        stack: true,
        type: "bar",
        data: [3, 4, 4],
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(253, 201, 38, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 213, 81, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          shadowBlur: 10,
          shadowColor: "rgba(253, 201, 38, 1)",
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 14,
        },
        barWidth: "60%",
        barGap: "0%",
        barCategoryGap: "0%",
      },
      {
        name: "五星",
        type: "bar",
        stack: true,
        emphasis: {
          focus: "series",
        },
        data: [3, 4, 7],
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(254, 138, 37, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 158, 74, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          shadowBlur: 10,
          shadowColor: "rgba(254, 138, 37, 1)",
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 14,
        },
        barWidth: "60%",
        barGap: "0%",
        barCategoryGap: "0%",
        markPoint: {
          data: [
            {
              type: "max",
              name: "Max",
              symbol:
                "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAtCAYAAAA+7zKnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVGiB7ZfPSxRhGICfd1rbrQTrYBRtVGRQecmOajRpK6zQQQhCOnpz+xfMMYJugqi3PHf1ICQs1ihmEURQ0Wo/qGj7IUFbprG27bwddhdMU3d11tlgHxg+vpmPl+edme+dd4hEIqH+/v749PT0x7a2thD/EYZhGK2qesAwjP0i0uq1UKHcBzR7PAR4XVfX7KlRngig35qb2T02BsDTgwftXXv3mjurqwkEAgR27GB7RcW91Nevd/wjI1e91f0bY8UZEfMf5xrSIl2Jhgb9dPp09xZ45cVK+fUQsd7W1upMTY3nSRQun0VVrSfB4F03ZQplw/IACubzo0f15cmTnjyFTcnnULDenDq15Qm4Ig+gIhaZctv95cKFHrfiroWvCDEtyYxXgclUJDKxze83JZ1WFhYcuXnzDICGQkg0agM2sKFkiyG/lEZHpNEQQVRBdfl1EzB/1tVZqVTKqnr2rKAkXHttNouIWN8L3DclIw+Zjb/Q1JR3AiUlD5mNn7x0Ka/vR8nJA4iqme7s1HRn55pPoSTlc6iIlbx8WX+0tnYnGhvN5deLXW3cQcRSVWZra/mdSFi/5ubGj8zP26Uiby+dqAiqCiLkiquq2o7IuGMYHJmft8HbOz8OWIC98/HjDQXwQn4CsCQa3XRHutXy14Eut4IVrdp8b28HwD8wgKhOkU63yNCQa+KQlc/9vwLgOOfUcc7vGx2V3cPDArSo49zIN+An0wSg6tYtfnZ0TAItRm9vgwwORt0UB5Ar8P5MOBz8fPs2L+DDIARXW5yor+9OJpMsLi5a2ZEKvx9f9qjw+/EFAuy37QngGjC2Wiw38B0OhR7MhsMXw319zLa33+fRo1UX75maynV9PbGaGhM4q6oIZLrGTAWBZaWvWPjeHT8eP5adTB86FF9LfiknXr2y2SLJ1Sjp9mA9yvJeUZb3irK8V5TlvaIs7xVlea8oy3tFWd4rfLFYbLSysjI5MzNDPB63vRYqhD9Ytvk35U4aVgAAAABJRU5ErkJggg==",
              label: {
                show: false,
              },
              symbolOffset: ["50%", "-50%"],
            },
          ],
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart6Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  const offsetX = 60; //bar宽
  const offsetY = 16; //倾斜角度
  const x = 0;
  const y = 0;
  const offset = 6;
  // 绘制上部分
  const CubeTopRect = echarts.graphic.extendShape({
    shape: {
      x: x,
      y: y,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]; // 左上
      const c2 = [shape.x + offsetX, shape.y]; // 右上
      const c3 = [shape.x + offsetX + offsetY, shape.y + offsetY]; // 右下
      const c4 = [shape.x - offsetY, shape.y + offsetY]; // 左下
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 绘制中间部分
  const CubeCenterRect = echarts.graphic.extendShape({
    shape: {
      x: x,
      y: y,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x - offsetY, shape.y + offsetY]; // 左上
      const c2 = [shape.x + offsetX + offsetY, shape.y + offsetY]; // 右上
      const c3 = [shape.x + offsetX + offsetY, shape.y + offsetY + offset]; // 右下
      const c4 = [shape.x - offsetY, shape.y + offsetY + offset]; // 左下
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 绘制下面部分
  const CubeBottomRect = echarts.graphic.extendShape({
    shape: {
      x: x,
      y: y,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;

      const c1 = [shape.x - 10, shape.y + offsetY + offset]; // 左上
      const c2 = [shape.x + offsetX + 10, shape.y + offsetY + offset]; // 右上
      const c3 = [xAxisPoint[0] + offsetX / 2 + 10, xAxisPoint[1]]; // 右下
      const c4 = [shape.x - 10, xAxisPoint[1]]; // 左下
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 注册三个面图形
  echarts.graphic.registerShape("CubeTopRect", CubeTopRect);
  echarts.graphic.registerShape("CubeCenterRect", CubeCenterRect);
  echarts.graphic.registerShape("CubeBottomRect", CubeBottomRect);
  let seriesData = [8, 9, 15, 10, 7];

  const colors = [
    {
      top: ["rgba(106, 190, 255, 1)", "rgba(94, 185, 255, 1)"],
      center: ["rgba(57, 169, 255, 1)"],
      bottom: ["#1796f8", "#64bcff"],
    },
    {
      top: ["rgba(255, 163, 118, 1)", "rgba(255, 155, 106, 1)"],
      center: ["rgba(255, 137, 79, 1)"],
      bottom: ["#ff7936", "#ffa578"],
    },
    {
      top: ["rgba(255, 127, 127, 1)", "rgba(255, 106, 106, 1)"],
      center: ["rgba(255, 91, 91, 1)"],
      bottom: ["rgba(255, 56, 56, 1)", "rgba(255, 104, 104, 1)"],
    },
    {
      top: ["rgba(255, 214, 155, 1)", "rgba(255, 207, 136, 1)"],
      center: ["rgba(255, 200, 119, 1)"],
      bottom: ["#ffb953", "#ffca7c"],
    },
    {
      top: ["rgba(255, 242, 0, 1)", "rgba(198, 188, 0, 1)"],
      center: ["rgba(233, 221, 0, 1)"],
      bottom: ["#dfd400", "#fef100"],
    },
  ];

  // 指定图表的配置项和数据
  const option = {
    grid: {
      left: "7%",
      right: "7%",
      top: "20%",
      bottom: "9%",
      containLabel: true,
    },
    legend: {
      top: "5%",
      left: "3%",
      itemWidth: 6,
      itemHeight: 6,
      data: [
        "一星党支部",
        "二星党支部",
        "三星党支部",
        "四星党支部",
        "五星党支部",
      ],
      itemStyle: {
        borderWidth: 0,
      }
    },
    xAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      boundaryGap: true,
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        type: "custom",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeTopRect",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0] - offsetX / 2,
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colors[params.dataIndex].top[0],
                    },
                    {
                      offset: 1,
                      color: colors[params.dataIndex].top[1],
                    },
                  ]),
                },
              },
              {
                type: "CubeCenterRect",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0] - offsetX / 2,
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: colors[params.dataIndex].center[0],
                },
              },
              {
                type: "CubeBottomRect",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0] - offsetX / 2,
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colors[params.dataIndex].bottom[0],
                    },
                    {
                      offset: 1,
                      color: colors[params.dataIndex].bottom[1],
                    },
                  ]),
                },
              },
            ],
          };
        },
        z: 1,
        data: seriesData,
      },
      {
        name: "党支部",
        type: "bar",
        data: seriesData,
        barWidth: 40,
        itemStyle: {
          color: "transparent",
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: (params) => {
            console.log("params :>> ", params);
            let str = "党支部";
            switch (params.dataIndex) {
              case 0:
                str = "一星党支部";
                break;
              case 1:
                str = "二星党支部";
                break;
              case 2:
                str = "三星党支部";
                break;
              case 3:
                str = "四星党支部";
                break;
              case 4:
                str = "五星党支部";
                break;
            }
            return [`{cs|${params.data}}`, `{as|${str}}`].join("\n");
          },
          rich: {
            cs: {
              color: "rgba(255, 255, 255, 1)",
              fontSize: 22,
              lineHeight: 22,
              align: "center",
            },
            as: {
              color: "rgba(255, 255, 255, 1)",
              padding: [10, 0, 0, 0],
              align: "center",
            },
          },
        },
      },
      {
        name: '一星党支部',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          color: '#1796f8'
        }
      },
      {
        name: '二星党支部',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          color: '#ff7936'
        }
      },
      {
        name: '三星党支部',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          color: '#ff3939'
        }
      },
      {
        name: '四星党支部',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          color: '#ffb953'
        }
      },
      {
        name: '五星党支部',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          color: '#dfd400'
        }
      }
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart4Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "5%",
      left: "3%",
      itemWidth: 6,
      itemHeight: 6,
      data: ["原油产量", "天然气产量"],
      icon: "rect",
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "3%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 207, 144, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 220, 174, 1)",
          },
        },
        axisLabel: {
          fontSize: 14,
          color: "rgba(196, 101, 85, 1)",
        },
      },
    ],
    series: [
      {
        name: "原油产量",
        type: "line",
        showSymbol: false,
        smooth: true,
        data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 320, 332],
        lineStyle: {
          color: "rgba(255, 56, 56, 1)",
        },
        itemStyle: {
          color: "rgba(255, 56, 56, 1)",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 56, 56, 0.3)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 56, 56, 0)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      {
        name: "天然气产量",
        type: "line",
        showSymbol: false,
        smooth: true,
        data: [220, 182, 191, 234, 290, 320, 332, 220, 182, 191, 234, 290],
        lineStyle: {
          color: "rgba(255, 175, 100, 1)",
        },
        itemStyle: {
          color: "rgba(255, 175, 100, 1)",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 175, 100, 0.3)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 175, 100, 0)", // 100% 处的颜色
              },
            ],
          },
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart7Data(dom) {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(dom);

  let colorList = [
    "rgba(87, 183, 255, 1)",
    "rgba(255, 186, 122, 1)",
    "rgba(255, 242, 0, 1)",
    "rgba(255, 56, 56, 1)",
  ];
  let data = [
    { name: "SEC储量", value: 61 },
    { name: "SEC储量", value: 30 },
    { name: "SEC储量", value: 40 },
    { name: "SEC储量", value: 55 },
  ];
  // data排序
  data = data.sort((a, b) => {
    return a.value - b.value;
  });
  // data样式
  data.forEach((item, index) => {
    const transparentColor = colorList[index];
    item.itemStyle = {
      color: transparentColor,
      borderColor: "#fff",
    };
  });

  // 指定图表的配置项和数据
  const option = {
    grid: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
    series: [
      {
        stack: "a",
        type: "pie",
        radius: ["0%", "68%"],
        center: ["50%", "50%"],
        clockwise: true, // 鼠标悬浮效果
        roseType: "area",
        zlevel: 10,
        label: {
          show: true,
          color: "transparent",
          fontSize: 14,
        },
        labelLine: {
          length2: 0,
          lineStyle: {
            color: "#fff",
          },
        },
        itemStyle: {
          borderWidth: 1,
        },
        data: data,
      },
      {
        type: "pie",
        color: "#fff",
        radius: ["0%", "5%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [0],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
