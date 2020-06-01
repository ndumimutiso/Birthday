function findAge() {
	var date = document.getElementById('birthday').value;
	var gender = document.getElementById('gender').value;
	var month = date.getMonth();
	var day = date.getdate();
	var year = date.getFullYear();
	var CC=Math.ceil(year/100);

	if(date === ""){
		alert("Please complete the required field!");
	}else if (month >12||month<1){
								alert("Invalid Month!");
	 }else if (day >31||day<1){
								alert("Invalid Day!");
  }else{

var dday= ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;


		}
		document.getElementById('result').innerHTML = "<center><h2>Congratulation</h2></center> <center><label>You birth day was on a "+dday+"</label></center>";
	}
}
