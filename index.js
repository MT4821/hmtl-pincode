let x = "";
function ch(b){
    x+=b;
    document.getElementById("line").innerHTML=x;
}
function reset(){
    x = "";
    document.getElementById("line").innerHTML=x;
}
function ENTER(){
    if (x == "0EF081"){
        alert("You wrote the right code, please check the box for code");
        document.getElementById("line").innerHTML="Congratulations you wrote the right code, here have medal";
        document.getElementById("img").src='medal.jpg';
        document.getElementById("img").width="200";
        document.getElementById("img").height="200";
    }
    else{
        alert("Wrong!");
        reset();
    }
}