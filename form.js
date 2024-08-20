let submit_btn = document.querySelector('#Submit')
//console.log(submit_btn)
// SUBMIT MOUSE EVENT 
submit_btn.addEventListener("mouseover" , function(){

    this.style.backgroundColor = " rgb(39, 174, 96 , 0.5 ) "
})

submit_btn.addEventListener("mouseout" , function(){

    this.style.backgroundColor = " rgb(39, 174, 96  ) "
    this.style.color = " white "
})

submit_btn.addEventListener("mousedown" , function(){

    this.style.backgroundColor = " black "
    this.style.color = " yellow "
})
// RESET BTN MOUSE EVENT 
let Reset_btn = document.querySelector("#Reset")
//console.log(Reset_btn)
Reset_btn.addEventListener("mouseover" , function(){

    this.style.backgroundColor = " rgb(97, 106, 107, 0.5 ) "
})

Reset_btn.addEventListener("mouseout" , function(){

    this.style.backgroundColor = " rgb(97, 106, 107) "
    this.style.color = " white "
})

Reset_btn.addEventListener("mousedown" , function(){

    this.style.backgroundColor = " black "
    this.style.color = " yellow "
})
// LOGIN BTN MOUSE EVENT 
let Log_btn = document.querySelector("#log_in")
Log_btn.addEventListener("mouseover" , function(){

    this.style.backgroundColor = " rgb(52, 152, 219, 0.5 ) "
})

Log_btn.addEventListener("mouseout" , function(){

    this.style.backgroundColor = " rgb(52, 152, 219) "
    this.style.color = " white "
})

Log_btn.addEventListener("mousedown" , function(){

    this.style.backgroundColor = " black "
    this.style.color = " yellow "
})

// input focus event 
// user name 
let Username = document.querySelector("#Username")
Username.addEventListener("focus" , function(e){
    Username.style.borderColor = "#6c3483 "
    Username.style.backgroundColor = "#e1bee7 "
   
   
})

let Mail = document.querySelector("#Mail")
Mail.addEventListener("focus", function(e){
    Mail.style.borderColor = "#6c3483 "
    Mail.style.backgroundColor = "#e1bee7 "
})
// phone number 
let Phone_number= document.querySelector("#Phone_number")
Phone_number.addEventListener("focus", function(e){
    Phone_number.style.borderColor = "#6c3483 "
    Phone_number.style.backgroundColor = "#e1bee7 "
})
//password 
let Password = document.querySelector("#Password")
Password.addEventListener("focus", function(e){
    Password.style.borderColor = "#6c3483 "
    Password.style.backgroundColor = "#e1bee7 "
})
// confirm password 
let CPassword = document.querySelector("#CPassword")
CPassword.addEventListener("focus", function(e){
    CPassword.style.borderColor = "#6c3483 "
    CPassword.style.backgroundColor = "#e1bee7 "
})