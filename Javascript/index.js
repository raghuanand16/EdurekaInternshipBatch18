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

let d1 = new Date();
document.getElementById("xyz7").innerHTML = d1;

let d2 = new Date("01/01/2021");
document.getElementById("xyz8").innerHTML = d2;
let v1;
function jsvalidate(){
      v1 = document.forms["myform"]["fname"].value;
      if( v1 == "")
      {
            alert("The First Name Field is Empty");
            return false;
      }

      let v2 = document.forms["myform"]["lname"].value;
      if( v2 == "")
      {
            alert("The Last Name Field is Empty");
            return false;
      }

      let v3 = document.forms["myform"]["userid"].value;
      if( v3 == "")
      {
            alert("The User Id Field is Empty");
            return false;
      }

      let v4 = document.forms["myform"]["password"].value;
      if( v4 == "")
      {
            alert("The Password Field is Empty");
            return false;
      }

      let v5 = document.forms["myform"]["phno"].value;
      if( v5 == "")
      {
            alert("The Phone Number Field is Empty");
            return false;
      }
      else if(v5.length != 10)
      {
            alert("The Phone Number Field is not of 10 digits");
            return false;
      }

}

try{
      alertt("Hello");
}
catch(error){
      document.getElementById("xyz9").innerHTML = error.message;
}

//Object and this

const employee1 = {
      name: "Edureka1",
      company: "EdTech1",
      funname : function(){ return this.name;}
}
const employee2 = {
      name: "Edureka2",
      company: "EdTech2",
      funname : function(){ return this.name;}
}
//document.getElementById("xyz10").innerHTML = employee1.funname();
document.getElementById("xyz11").innerHTML = employee2.funname();

var abcedureka = "100";

var trainer = {
      abcedureka: "50",
      funabcedureka : () => this.abcedureka
}
document.getElementById("xyz10").innerHTML = trainer.funabcedureka();

var i1 = "Raghu";
var i2 = "Anand";

var i3 = `My Trainer name is ${i1} ${i2}`;

document.getElementById("xyz25").innerHTML = i3;

var j1 = ["Apple", "Orange", "Pineapple"];
var j2 = "<ul>";
for(let j3 of j1){
      j2 += `<li>${j3}</li>`;
}
j2 += "</ul>";
document.getElementById("xyz26").innerHTML = j2;

class Internship{
      constructor(firstname,lastname){
          this.firstname = firstname;
          this.lastname = lastname;
      }
      name(){
          return `I am ${this.firstname} ${this.lastname}`;
      }
      age(){
            return `My Age is ${this.age}`;
      }
  }
  var abcobj1 = new Internship("Mahatma","Gandhi");
  document.getElementById("xyz27").innerHTML = abcobj1.name();
  var abcobj2 = new Internship("Shubash","Chandra Bose");
  document.getElementById("xyz28").innerHTML = abcobj2.name();

  var consoleabc = 100;
  console.log(consoleabc);