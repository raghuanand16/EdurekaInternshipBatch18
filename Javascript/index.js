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
list => 
<ul>
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
</ul>