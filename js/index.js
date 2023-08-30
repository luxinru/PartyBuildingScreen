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

  const offsetX = 20;
  const offsetY = 10;
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint;
      // console.log(shape);
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - offsetX, shape.y - offsetY];
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath();
    },
  });
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
      const c4 = [shape.x + offsetX, shape.y - offsetY];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
      const c3 = [shape.x, shape.y - offsetX];
      const c4 = [shape.x - offsetX, shape.y - offsetY];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 注册三个面图形
  echarts.graphic.registerShape("CubeLeft", CubeLeft);
  echarts.graphic.registerShape("CubeRight", CubeRight);
  echarts.graphic.registerShape("CubeTop", CubeTop);

  const VALUE = [500, 480, 450, 410];

  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params, ticket, callback) {
        const item = params[1];
        return item.name + " : " + item.value;
      },
    },
    grid: {
      left: "3%",
      right: "3%",
      top: "25%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["机关第一党支部", "机关第二党支部", "机关第三党支部", "机关第四党支部"],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        fontSize: 12,
        interval: 0,
        color: 'rgba(196, 101, 85, 1)'
      },
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
        show: false
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
                      color: "#33BCEB",
                    },
                    {
                      offset: 1,
                      color: "#337CEB",
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
                      color: "#28A2CE",
                    },
                    {
                      offset: 1,
                      color: "#1A57B7",
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
                      color: "#43C4F1",
                    },
                    {
                      offset: 1,
                      color: "#28A2CE",
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: VALUE,
      },
      {
        type: "bar",
        showBackground: true,
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: (e) => {
              return e.value + "次";
              /*console.log(e)
                        switch (e.name) {
                            case '1001':
                                return e.value;
                            case '1002':
                                return VALUE[1];
                            case '1003':
                                return VALUE[2];
                        }*/
            },
            fontSize: 16,
            color: "#43C4F1",
            offset: [0, -25],
          },
        },
        itemStyle: {
          color: "transparent",
        },
        tooltip: {},
        data: VALUE,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function getChart3Data(dom) {
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
