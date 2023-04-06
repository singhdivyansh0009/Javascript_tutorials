/* program for max of 3 */
	let a,b,c;
	a = prompt("enter value of a");
    b = prompt("enter value of b");
    c = prompt("enter value of c");
	if(a>b)
	{
		if(a>c)
		  console.log("%d is greater",a);
		else
		  console.log("%d is greater",c);
	}
	else 
	{
     	if(b>c)
     	   console.log("%d is greater",b);
     	else
     	   console.log("%d is greater",c);
    } 
