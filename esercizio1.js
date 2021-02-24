function sum(){
    let a=document.getElementById("primoAddendo").value;
    let b=document.getElementById("secondoAddendo").value;
    let c=document.getElementById("result");
    c.innerText=parseInt(a)+parseInt(b);
    // c.innerText=result;
    console.log(a.value);

}
function firstWorld(){
    let a=document.getElementById("frase").value;
    let b=a.substring(0,a.indexOf(" "));
    let c=document.getElementById("world");
    c.innerText=b;
   
    
}


