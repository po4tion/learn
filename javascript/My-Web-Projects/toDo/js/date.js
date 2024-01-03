const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const week = document.getElementById('week');


const date_ = new Date();

const week_ = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat');
const month_ = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec');

day.innerText = date_.getDate();
month.innerText = month_[date_.getMonth()];
year.innerText = date_.getFullYear();
week.innerText = week_[date_.getDay()];