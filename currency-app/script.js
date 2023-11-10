function moneyfunction(){

let money = parseFloat(document.getElementById('money').value);

let euro = money*0.94
let euroSpan = document.getElementById("euro");
euroSpan.innerText = euro;

let pound = money*0.81
let poundSpan = document.getElementById("pound");
poundSpan.innerText = pound;

let cad = money*1.38
let cadSpan = document.getElementById("cad");
cadSpan.innerText = cad;

let chf = money*0.9
let chfSpan = document.getElementById("chf");
chfSpan.innerText = chf;

let yen = money*151.5
let yenSpan = document.getElementById("yen");
yenSpan.innerText = yen;
}