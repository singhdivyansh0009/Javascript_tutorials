const Linear_search = (a,b) => {
    let flag = 0,i;
   for( i = 0; i<a.length; i++)
   {
    if(a[i]==b)
    {
      flag=1;
      break;
    }
   }
   if(flag == 1)
     console.log("Founded at index : ",i);
   else
     console.log("Not founded");
}
const Binary_search = (a,b) => {
    let flag = 0, i = 0, j = a.length-1, mid;
   while(i < j)
   {
    mid = Math.floor((i+j)/2);
    if(a[mid] == b)
    {
      flag = 1;
      break;
    }
    else if(a[mid]>b)
        j = mid-1;
    else
        i = mid+1;     
   }
   if(flag == 1)
     console.log("Founded at index : ", mid);
   else
     console.log("Not founded");
   
}
let a = [1,2,3,4,5];
// Linear_search(a,3);
Binary_search(a,6)