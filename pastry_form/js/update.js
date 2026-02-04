//calculates the total of the pastries being purhased. gives error if quantity is negative
function update() {
	//TODO
	var cost = document.getElementsByClassName("cost");
	var quant = document.getElementsByClassName("quant");
	var total = document.getElementById("totalCost");


	var qTotal = 0;
	var costTotal = 0;



	for (let i = 0; i < cost.length; i++) {
		// check if quantity is negative and if so, give an error
		if (Math.sign(quant[i].value) == -1 || quant[i].value == "") {
			alert("The quantity MUST be a positive number! or not blank");
			console.log("Negative quantity detected");
			quant[i].style.backgroundColor = "rgb(255, 142, 142)";
			quant[i].style.color = "red";

		}
		else {
			costTotal += parseFloat(cost[i].textContent) * parseFloat(quant[i].value);
			qTotal += quant[i].valueAsNumber;
			quant[i].style.backgroundColor = "rgb(255, 255, 255)";
			quant[i].style.color = "black";
		}


		console.log("Cost of pastry " + (i + 1) + " is: " + cost[i].textContent);

	}

	total.innerHTML = costTotal;
	// quantityTotal
	document.getElementById("quantTotal").innerHTML = qTotal;

	// print the output to the console
	console.log("Total for " + quant[0].textContent + " pastries is: " + costTotal);

}