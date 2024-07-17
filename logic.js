let btnStatus = document.querySelector("#submit");
btnStatus.addEventListener("click",function(){
  let text = document.querySelector("#word-input");
    if(text.value != ''){
        alert(text.value);
    }else{
        alert("Please write in box your needs!")
    }
})