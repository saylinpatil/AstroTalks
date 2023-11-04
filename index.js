

function validateuName(inputName){
  var letters ="^[A-Za-z \s*]+$";
  if(inputName.value.match(letters))
  {
  uName();
  return true;
  }
  else
  {
  alert('Please input alphabet characters only');
  window.location.reload();
  return false;
  }
}

    
function uName()
{
var fname = document.getElementById("name").value;
const temp = Array.from(fname);
const num= new Array();
for (let x = 0; x < temp.length; x++) {
  if(temp[x]=='a'||temp[x]=='A'||temp[x]=='j'||temp[x]=='J'||temp[x]=='s'||temp[x]=='S')
  {
	num[x]=1;
  }
  else if (temp[x]=='b'||temp[x]=='B'||temp[x]=='k'||temp[x]=='K'||temp[x]=='t'||temp[x]=='T')
  {
	num[x]=2;
   }
   else if (temp[x]=='c'||temp[x]=='C'||temp[x]=='l'||temp[x]=='L'||temp[x]=='u'||temp[x]=='U')
  {
	num[x]=3;
   }
    else if (temp[x]=='d'||temp[x]=='D'||temp[x]=='m'||temp[x]=='M'||temp[x]=='v'||temp[x]=='V')
  {
	num[x]=4;
   }
    else if (temp[x]=='e'||temp[x]=='E'||temp[x]=='n'||temp[x]=='N'||temp[x]=='w'||temp[x]=='W')
  {
	num[x]=5;
   }
    else if (temp[x]=='f'||temp[x]=='F'||temp[x]=='o'||temp[x]=='O'||temp[x]=='x'||temp[x]=='X')
  {
	num[x]=6;
   }
    else if (temp[x]=='g'||temp[x]=='G'||temp[x]=='p'||temp[x]=='P'||temp[x]=='y'||temp[x]=='Y')
  {
	num[x]=7;
   }
    else if (temp[x]=='h'||temp[x]=='H'||temp[x]=='q'||temp[x]=='Q'||temp[x]=='Z'||temp[x]=='z')
  {
	num[x]=8;
   }
   else 
   {
	num[x]=9;
   }
   }
   var add=0,rem=0,fin=0;
   x=0;
 while(x<num.length)
 {
	add=num[x]+add;
	x++;
  }
  while(add>9)
  { 
	if(add==11 || add==22 || add==33)
	{
		break;
	}
	fin=0;
	while(add>0)
	{
		rem=add%10;
		fin=rem+fin;
		add=add/10;
	}
	add=fin;
  }
 
	if(1.9>add && add>1)
    add=1;
	else if(2.9>add && add>2)
    add=2;
	else if(3.9>add && add>3)
    add=3;
	else if(4.9>add && add>4)
    add=4;
	else if(5.9>add && add>5)
    add=5;
    else if(6.9>add && add>6)
    add=6;
	else if(7.9>add && add>7)
    add=7;
	else if(8.9>add && add>8)
    add=8;
	else if(9.9>add && add>9)
    add=9;

   
  if (add==0)
  alert("Enter name first..!");
  else
  {
  let  dis  ="Your Lucky Number is ";
  document.getElementById("text").innerHTML = dis + add;
  setTimeout(reload, 3500);
  }
  function reload() {
    document.location.reload();
  }
  
  
}

 