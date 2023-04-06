/*program to check char is alphabet or not and if yes then vowel or not */
let ch = prompt("enter a character");
if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z'))
{ 
   console.log("Yes,Alphabet\n");
   switch(ch)
   {
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':console.log("character is vowel");break;
	default :console.log("character is not vowel"); 
  }
}
else
   console.log("Not an alphabet");
