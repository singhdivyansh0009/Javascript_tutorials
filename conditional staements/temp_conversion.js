
	let c,f,choice;
	choice=prompt("Enter 1 to convert into celsius\nEnter 2 to convert into faranhite");
	if(choice == 1)
	{
	 f = prompt("enter temprature in faranhite");
	 c=((f-32)*5)/9;
	 console.log("celsius :",c);
    }
    else
    {
	 c = prompt("enter temprature in celsius");
	 f=(9*c/5)+32;
	 console("faranhite : ",f);
    }	