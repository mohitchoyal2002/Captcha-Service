


function change_code(){
  var a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var code="";
  for(var i = 0;i<=6;i++){
    var index =Math.floor(Math.random()*a.length);
    code += a[index];
  }
  // alert(code);
  document.querySelector(".chnge-btn").setAttribute('value', code);
}
function onloadCallback(){
  grecaptcha.ready(function(){
    grecaptcha.render("container", {
      sitekey: "6Lem6m4fAAAAAFrMFBrbIR32toghGr2hQYncOdBs"
    });
  });
  
}

change_code();

const reload = document.querySelector(".bttn");


function submit(){
  // var res = grecaptcha.getResponse();
  // console.log(res);
  var real = document.querySelector(".real").value;
  var user = document.querySelector(".user_code").value;
  const err = document.querySelector(".error");
  if(real==user){
    err.innerHTML = "Code Matched";
    err.style.color = "green";
    // window.location.href = "youdidit.html";
  }
  else{
    err.innerHTML = "Code Does Not Matched !";
    err.style.color = "red";
  }
  change_code();
}
reload.addEventListener('click',change_code);
var sub = document.querySelector(".btn");
sub.addEventListener('click',submit);
document.addEventListener('keypress', function(e){
  if(e.code == "Enter"){
    submit();
  }
});