let string="";
let button=document.querySelectorAll(".calcbutton");
Array.from(button).forEach((buttons)=>{
buttons.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '=')
    {
        string=eval(string);
        
        document.querySelector(".display").innerHTML = string;
    }
    else if(e.target.innerHTML=='C'||e.target.innerHTML=='c'){
        string="0";
        document.querySelector(".display").innerHTML=string;

    }
    else {
    string=string+e.target.innerHTML;
    document.querySelector(".display").innerHTML = string;
}})});
document.addEventListener('keypress',(e)=>{
    if(e.key== '=')
    {
        string=eval(string);
        document.getElementsByClassName("display")[0].innerHTML=string;
    }
    else if(e.key=='C'||e.key=='c'){
        string="0";
        document.getElementsByClassName("display")[0].innerHTML=string;

    }
    else {
string=string+e.key;
document.getElementsByClassName("display")[0].innerHTML=string;
    }
});