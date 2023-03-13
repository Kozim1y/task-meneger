let months = [
	"yanvar",
	"fevrel",
	"mart",
	"aprel",
	"may",
	"iyun",
	"iyul",
	"avgust",
	"sentabr",
	"oktabr",
	"noyabr",
	"dekabr",
];
function load() {
	let nowDay = document.querySelector(".now-day-js");
	let nowHour = document.querySelector(".now-hour-js");
	let nowMinute = document.querySelector(".now-minute-js");
	let nowSecond = document.querySelector(".now-second-js");
	let date = new Date();

	let day = date.getDate();
	let monthNumber = date.getMonth();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	nowDay.textContent = `${day}-${months[monthNumber]}`;
  nowHour.textContent = `${hour = (hour < 10) ? "0" + hour : hour} :`;
  nowMinute.textContent = `${minute = (minute < 10) ? "0" + minute : minute} :`;
  nowSecond.textContent = `${second = (second < 10) ? "0" + second : second}`;
}

setInterval(load, 999);
