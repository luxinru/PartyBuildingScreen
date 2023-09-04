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
    ],
    series: [
      {
        name: "成本(万元)",
        yAxisIndex: 0,
        type: "bar",
        barGap: 0,
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

  yList = [32];
  yList2 = [52];
  xList = [10];
  color = [
    "#CC1CAA",
    "#8D67FF",
    "#00FFFF",
    "#48DE13",
    "#FFC516",
    "#DC3E14",
    "#8E16F8",
  ];
  xData = xList.map((item, index) => {
    return {
      value: item,
      textStyle: {
        color: color[index],
      },
    };
  });
  dom = 800;
  barWidth = dom / 20;
  colors = [
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#FF3FDA",
        },
        {
          offset: 0.5,
          color: "#FF3FDA",
        },
        {
          offset: 0.5,
          color: "#CC1BAA",
        },
        {
          offset: 1,
          color: "#CC1BAA",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#602CFF",
        },
        {
          offset: 0.5,
          color: "#602CFF",
        },
        {
          offset: 0.5,
          color: "#4915E6",
        },
        {
          offset: 1,
          color: "#4915E6",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#00FFFF",
        },
        {
          offset: 0.5,
          color: "#00FFFF",
        },
        {
          offset: 0.5,
          color: "#11A6D0",
        },
        {
          offset: 1,
          color: "#11A6D0",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#89FF5E",
        },
        {
          offset: 0.5,
          color: "#89FF5E",
        },
        {
          offset: 0.5,
          color: "#48DD12",
        },
        {
          offset: 1,
          color: "#48DD12",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#FFD05C",
        },
        {
          offset: 0.5,
          color: "#FFD05C",
        },
        {
          offset: 0.5,
          color: "#DEA821",
        },
        {
          offset: 1,
          color: "#DEA821",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#FF7853",
        },
        {
          offset: 0.5,
          color: "#FF7853",
        },
        {
          offset: 0.5,
          color: "#DB3E13",
        },
        {
          offset: 1,
          color: "#DB3E13",
        },
      ],
    },
    {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#AA48FF",
        },
        {
          offset: 0.5,
          color: "#AA48FF",
        },
        {
          offset: 0.5,
          color: "#8E15F8",
        },
        {
          offset: 1,
          color: "#8E15F8",
        },
      ],
    },
  ];

  // 指定图表的配置项和数据
  const option = {
    //提示框
    tooltip: {
      show: false,
    },
    /**区域位置*/
    //   grid: {
    //       left: '10%',
    //       right: '10%',
    //       top: 80,
    //       bottom: 40,
    //     },
    /**图例大小*/
    //  legend: {
    //   type: 'plain',
    //   left: 0,
    //   top: 20,
    //   itemGap: 20,
    //   itemWidth: 35,
    //   itemHeight: 20
    // },
    //X轴
    xAxis: {
      show: false,
      name: "X",
      nameTextStyle: {
        color: "#FFFFFF",
        padding: [0, 0, 0, 20],
      },
      data: xData,
      type: "category",
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,1)",
          shadowColor: "rgba(255,255,255,1)",
          shadowOffsetX: "20",
        },
        symbol: ["none", "arrow"],
        symbolOffset: [0, 25],
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      axisLabel: {
        rotate: -30,
        fontSize: 12,
      },
    },
    yAxis: {
      show: false,
      splitNumber: 4,
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      axisLabel: {
        color: "#FFFFFF",
      },
    },
    series: [
      {
        type: "bar",
        stack: "ttt",
        barWidth: barWidth,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#2450F0",
              },
              {
                offset: 1,
                color: "#2FCAFD",
              },
            ]),
          },
        },
        data: yList,
      },
      {
        type: "bar",
        stack: "ttt",
        barWidth: barWidth,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#1A4DC0",
              },
              {
                offset: 1,
                color: "#9E2FFD",
              },
            ]),
          },
        },
        data: yList2,
      },
      {
        z: 2,
        type: "pictorialBar",
        data: yList,
        symbol: "diamond",
        symbolOffset: [0, "50%"],
        symbolSize: [barWidth, barWidth * 0.5],
        itemStyle: {
          normal: {
            color: "#2FCAFD",
          },
        },
      },
      {
        z: 3,
        type: "pictorialBar",
        symbolPosition: "end",
        data: yList,
        symbol: "diamond",
        symbolOffset: [0, "-50%"],
        symbolSize: [barWidth, barWidth * 0.5],
        itemStyle: {
          normal: {
            borderWidth: 0,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#3FA1FB",
              },
              {
                offset: 1,
                color: "#41B4F8",
              },
            ]),
          },
        },
      },
      {
        z: 3,
        type: "pictorialBar",
        symbolPosition: "end",
        data: [84],
        symbol: "diamond",
        symbolOffset: [0, "-50%"],
        symbolSize: [barWidth, barWidth * 0.5],
        itemStyle: {
          normal: {
            borderWidth: 0,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#886DF8",
              },
              {
                offset: 1,
                color: "#4781F0",
              },
            ]),
          },
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
      data: [
        "一星党支部",
        "二星党支部",
        "三星党支部",
        "四星党支部",
        "五星党支部",
      ],
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
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: ["2023"],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "一星党支部",
        yAxisIndex: 0,
        type: "bar",
        barGap: 0,
        emphasis: {
          focus: "series",
        },
        data: [5],
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
                color: "rgba(94, 185, 255, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(106, 190, 255, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: ["{cs|{c}}", "{as|{a}}"].join("\n"),
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
        name: "二星党支部",
        yAxisIndex: 0,
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [9],
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
                color: "rgba(255, 155, 106, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 163, 118, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: ["{cs|{c}}", "{as|{a}}"].join("\n"),
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
        name: "三星党支部",
        yAxisIndex: 0,
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [15],
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
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: ["{cs|{c}}", "{as|{a}}"].join("\n"),
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
        name: "四星党支部",
        yAxisIndex: 0,
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [7],
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
                color: "rgba(255, 207, 136, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 214, 155, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: ["{cs|{c}}", "{as|{a}}"].join("\n"),
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
        name: "五星党支部",
        yAxisIndex: 0,
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [6],
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
                color: "rgba(255, 242, 0, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 242, 0, 0.7)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        label: {
          show: true,
          color: "rgba(255, 255, 255, 1)",
          fontSize: 22,
          formatter: ["{cs|{c}}", "{as|{a}}"].join("\n"),
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
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
