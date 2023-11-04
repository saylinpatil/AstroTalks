var sign;
for(let j=1;j<=12;j++){
switch(j){
  case 1: sign="aries";break;
  case 2: sign="taurus";break;
  case 3: sign="gemini";break;
  case 4: sign="cancer";break;
  case 5: sign="leo";break;
  case 6: sign="virgo";break;
  case 7: sign="libra";break;
  case 8: sign="scorpio";break;
  case 9: sign="sagittarius";break;
  case 10: sign="capricorn";break;
  case 11: sign="aquarius";break;
  case 12: sign="pisces";break;
}
$.ajax({
type:'POST',
url:'https://aztro.sameerkumar.website?sign='+sign+'&day=today',
success: function(data){
   var str = JSON.stringify(data);
   var json = $.parseJSON(str);
  
   const element = document.getElementById(j);
   element.innerHTML = json.description; 
   const myText = document.getElementsByClassName("text-muted")[j-1];
   myText.innerHTML=json.current_date;

    },
    error: function(data){
       var json = $.parseJSON(data);
       alert(json.error);
    }
 
 }); }
  
 
