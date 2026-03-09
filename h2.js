function p(){
var r=""
var a=Number(prompt("enter age"))
if (a>=18){
r+="you can vote"
}
else{
    r+="you cannot vote"
}
document.getElementById("hh").innerHTML=r
}