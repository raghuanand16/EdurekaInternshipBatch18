var abc = ["apple","orange","banana"];    //array of string
//var abclen = abc.length;      //abclen will have the length of the array
var list = "<ul>";
for(var a = 0; a < abc.length; a++)  
// a++ =  a + 1   
//0<3 = apple, 1<3 = orange, 2<3 = banana, 3<3 => stop
{
      list += "<li>" + abc[a] + "</li>"; 
}
list += "</ul>";
document.getElementById("xyz1").innerHTML = list;

var def = "";
var i = 0;

while(i<5) 
{
      def += i + "<br/>";
      i++;
}
document.getElementById("xyz2").innerHTML = def;

var ghi = "";
var j = 5;

do
{
      ghi += j + "<br/>";     //5,4,3, 2, 1
      j--;                    //4,3, 2, 1, 0
}while(j>0);      //4>0, 3>0, 2>0 , 1>0, 0>0

document.getElementById("xyz3").innerHTML = ghi;

var computer = {ram_size: "6gb", monitor_size: "14 inch", mouse_type: "laser"};
var x = "<ul>";
for(var z in computer){             //z = 1st item, 2nd item, 3rd item  
      x += "<li>" + computer[z] + "</li>";    // 6gb 14 inch laser
}
x += "</ul>";
document.getElementById("xyz4").innerHTML = x;

var a1 = "Hello Everyone welcome to Edureka Edureka";
var a2 = a1.replace("Edureka","India")
document.getElementById("xyz5").innerHTML = a2;

document.getElementById("xyz6").innerHTML = Math.floor(Math.random() * 7);