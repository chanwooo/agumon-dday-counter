
function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

let ddays = [
  new Date("Nov 15, 2018 00:00:00"),
  new Date("Nov 14, 2019 00:00:00"),
  new Date("Dec 3, 2020 00:00:00"),
  new Date("Nov 18, 2021 00:00:00"),
  new Date("Nov 17, 2022 00:00:00"),
  new Date("Nov 16, 2023 00:00:00"),
  new Date("Nov 14, 2024 00:00:00"),
  new Date("Nov 13, 2025 00:00:00")
].map(dday => dday.getTime());

let now = new Date().getTime();

let countDownDate;
for(i=0; i<ddays.length; i++) {
  if (now < ddays[i]) {
    countDownDate = ddays[i];
    break;
  }
}
let distance = countDownDate - now;

	
setInterval(function() { // 오늘 날짜 등록
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);
  let ms = Math.floor(distance % 1000);

  if(distance>0){
  document.getElementById("d-day")
  .innerHTML = "" + pad(d,3) +":" + pad(h,2) + ":" + pad(m,2) + ":" + pad(s,2) + "."+pad(ms,3)+"";
  }
  else{
  document.getElementById("d-day")
  .innerHTML = "D-DAY<br>" + pad(0,3) +":" + pad(0,2) + ":" + pad(0,2) + ":" + pad(0,2) + "."+pad(0,3)+"<br>수능 대박";
  }

 },25);

