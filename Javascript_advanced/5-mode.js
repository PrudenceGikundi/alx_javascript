function changeMode(size,weight,transform,background,color){
 

  document.body.style.fontSize =`${size}px`
  document.body.style.fontWeight =`${weight}`
  document.body.style.textTransform =`${transform}`
  document.body.style.backgroundColor =`${background}`
  document.body.style.color =`${color}`  
}
function main(){
  const body=document.body;
  const spooky= changeMode(9,"uppercase","pink" , "green");
  const darkMode= changeMode(12,"bold" ,"capitalize" ,"black" ,"white" );
  const screamMode= changeMode(12,"normal" ,"lowercase" ,"white" ,"black" );

  var newElement = document.createElement("p");
  newElement.innerHTML= "Welcome Holberton!";
  body.appendChild(newElement);

  var button1 = document.createElement("button");
  button1.innerHTML="Spooky";
  body.appendChild(button1);

  var button2 = document.createElement("button");
  button2.innerHTML="Dark mode";
  body.appendChild(button2);

  var button3 = document.createElement("button");
  button3.innerHTML="Scream mode";
  body.appendChild(button3);

  button1.addEventListener ('click', () => changeMode(9, "bold", "uppercase", "pink", "green"));
  button2.addEventListener ('click', () => changeMode(12, "bold", "capitalize", "black", "white"));
  button3.addEventListener ('click', () => changeMode(12, "normal", "lowercase", "white", "black"));

}
main();