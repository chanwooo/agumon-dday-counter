
function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

var dday2018 = new Date("Nov 15, 2018 00:00:00").getTime(); //1초마다 갱신되도록 함수 생성,실행
var dday2019 = new Date("Nov 19, 2019 00:00:00").getTime();

var now = new Date().getTime();
var countDownDate=dday2018;

if(dday2018-now<-24*60*60*1000) {
	countDownDate=dday2019;
}

	

setInterval(function() { // 오늘 날짜 등록
var now = new Date().getTime(); // 종료일자에서 현재일자를 뺀 시간
var distance = countDownDate - now;
var d = Math.floor(distance / (1000 * 60 * 60 * 24));
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((distance % (1000 * 60)) / 1000);
var ms = Math.floor(distance%1000);



document.getElementById("d-day").innerHTML = "" + pad(d,3) +":" + pad(h,2) + ":" + pad(m,2) + ":" + pad(s,2) + "."+pad(ms,3)+"";
 },25);

