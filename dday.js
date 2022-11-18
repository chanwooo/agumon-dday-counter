
function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//var dday2018 = new Date("Nov 15, 2018 00:00:00").getTime(); //1초마다 갱신되도록 함수 생성,실행
//var dday2019 = new Date("Nov 14, 2019 00:00:00").getTime();
//var dday2020 = new Date("Dec 3, 2020 00:00:00").getTime();
var dday2021 = new Date("Nov 18, 2021 00:00:00").getTime();
var dday2022 = new Date("Nov 17, 2022 00:00:00").getTime();
var dday2023 = new Date("Nov 16, 2023 00:00:00").getTime();

var now = new Date().getTime();

var countDownDate=dday2021;
var distance = countDownDate - now;
if(distance<-86400000){
    countDownDate=dday2022;
}




	
setInterval(function() { // 오늘 날짜 등록
var now = new Date().getTime(); // 종료일자에서 현재일자를 뺀 시간
var distance = countDownDate - now;
var d = Math.floor(distance / (1000 * 60 * 60 * 24));
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((distance % (1000 * 60)) / 1000);
var ms = Math.floor(distance%1000);

if(distance>0){
document.getElementById("d-day").innerHTML = "" + pad(d,3) +":" + pad(h,2) + ":" + pad(m,2) + ":" + pad(s,2) + "."+pad(ms,3)+"";
}
else{
document.getElementById("d-day").innerHTML = "D-DAY<br>" + pad(0,3) +":" + pad(0,2) + ":" + pad(0,2) + ":" + pad(0,2) + "."+pad(0,3)+"<br>수능 대박";
}

 },25);

