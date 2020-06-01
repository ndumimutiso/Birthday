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
	var yy=year.toString();
	var CC=yy.substring(0,2);
	if(date === ""){
		alert("Please complete the required field!");
	}else if (month >12||month<1){
								alert("Invalid Month!");
	}else if (day >31||day<1){
 							alert("Invalid Day!");
	}else{
			
var dday= ((((CC/4) - 2)*(CC-1)) + ((5*year)/4) + ((26*(month+1)/10)) + day) % 7;
			var d=Math.trunc(dday);



	var dow="";
			uname="";
			if(d=="1")
			{
				dow="Monday";
				if(uGender="male")
					uname="Kwadwo";
				else
					uname="Adwoa";
			}	
			else if(d=="2")
			{
				dow="Tuesday";
				if(uGender="male")
					uname="Kwabena";
				else
					uname="Abenaa";
			}	
			else if(d=="3")
			{
				dow="Wednesday";
				if(uGender="male")
					uname="Kwaku";
				else
					uname="Akua";
			}	
			else if(d=="4")
				{
				dow="Thursday";
				if(uGender="male")
					uname="Yaw";
				else
					uname="Yaa";
			}	
			else if(d=="5")
			{
				dow="Friday";
				if(uGender="male")
					uname="Kofi";
				else
					uname="Afua";
			}	
			else if(d=="6")
			{
				dow="Saturday";
				if(uGender="male")
					uname="Kwame";
				else
					uname="Ama";
			}	
			else
			{
				dow="Sunday";
				if(uGender="male")
					uname="Kwasi";
				else
					uname="Akosua";
			}	
		document.getElementById('result').innerHTML = "<center><h2>You were born on a "+dow+"</h2></center> <center><label>Your akan name is "+uname+" </label></center>";
	}
}

