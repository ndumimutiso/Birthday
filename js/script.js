function findAge() {
	var dt = document.getElementById('birthday').value;
//	var gender = document.getElementsById('gender').value;
	var uGender="male";
	if ( document.getElementsByName('male').checked) {
      uGender="Male";
  } else 	if ( document.getElementsByName('female').checked) {
       uGender="Female";
  }

	var today = new Date();
	var date = new Date(dt);
	var month = date.getMonth();
	var day = date.getDate();
	var year = date.getFullYear();
	var CC=Math.ceil(year/100);
	if(date === ""){
		alert("Please complete the required field!");
	}else if (month >12||month<1){
								alert("Invalid Month!");
	}else if (day >31||day<1){
 							alert("Invalid Day!");
	}else{
			var dday= (((CC/4) - 2*CC-1) + ((5*year)/4) + ((26*(month+1)/10)) + day) % 7;
			var d=Math.trunc(dday);
			var dow="Tuesday";
			uname="";
			if(d=="1")
				{
					dow="Mondday";
if(uGender="male")
{
	uname="";
}
			}
				else 	if(d=="1")
						dow="Monday";
						else 	if(d=="2")
								dow="Tuesday";
								else 	if(d=="3")
										dow="Wednesday";
										else 	if(d=="4")
												dow="Thursday";
												else 	if(d=="5")
														dow="Friday";
														else 	if(d=="6")
																dow="Saturday";
																else
																	dow="Sunday";
		document.getElementById('result').innerHTML = "<center><h2>You were born on a "+dow+"</h2></center> <center><label>Your akan name is "+dow+" </label></center>";
	}
}
