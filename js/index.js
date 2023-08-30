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
