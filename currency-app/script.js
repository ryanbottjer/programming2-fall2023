function convert(){
	let usd = parseFloat(document.getElementById("moneyusd").value);
	let currency = document.getElementById("currencies").value;
	let convertDiv = document.getElementById("converted");

	if(currency == "eur"){
		let newAmount = usd*0.94;
		convertDiv.innerText = newAmount + " Euros";
	}

	else if(currency == "gbp"){
		let newAmount = usd*0.81;
		convertDiv.innerText = newAmount + " Pounds";
	}

	else if(currency == "cad"){
		let newAmount = usd*1.38;
		convertDiv.innerText = newAmount + " Canadian Dollars";
	}

	else if(currency == "chf"){
		let newAmount = usd*0.9;
		convertDiv.innerText = newAmount + " Swiss Franc";
	}

	else if(currency == "jyp"){
		let newAmount = usd*151.5;
		convertDiv.innerText = newAmount + " Yen";
	}

	else{
		convertDiv.innerText = "You must choose a currency!";
	}
}

// 	let euro = money*0.94
// 	let euroSpan = document.getElementById("eur");
// 	euroSpan.innerText = eur;

// 	let pound = money*0.81
// 	let poundSpan = document.getElementById("gbp");
// 	poundSpan.innerText = gbp;

// 	let cad = money*1.38
// 	let cadSpan = document.getElementById("cad");
// 	cadSpan.innerText = cad;

// 	let chf = money*0.9
// 	let chfSpan = document.getElementById("chf");
// 	chfSpan.innerText = chf;

// 	let yen = money*151.5
// 	let yenSpan = document.getElementById("jyp");
// 	yenSpan.innerText = jyp;
// }