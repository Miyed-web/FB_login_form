const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", 
() =>{
  if(input.type==="password"){
    input.type = "text";
  }
  else{
    input.type = "password";
  }
  
 
  
});





if(button.style.display = "none"){
  input.style.width="100%";
}
else{
  input.style.width="79%";
};
button.addEventListener("click",()=>{
  if(button.textContent=== "Show"){
    button.textContent = "Hide";
  }
  else{
    button.textContent = "Show";
  }
})











input.addEventListener("input",  function () {
   if(input.value.length > 0)
   {
     button.style.display = "inline-block";
   }else{
     button.style.display = "none";
   }
 });

