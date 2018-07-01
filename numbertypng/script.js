function prints(){
	
	let minimum =parseInt(document.getElementById("minimum").value);
	let maximum =parseInt(document.getElementById("maximum").value);
 	for(let i=minimum; i<=maximum; i++){
 		console.log(i);
 		let body =document.querySelector("body");
 		body.innerHTML += "<p>" + i + "</p>"
}
}