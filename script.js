const button=document.getElementById("create_account");
const input1=document.getElementById("password");
const input2=document.getElementById("confirm_password");

button.addEventListener('click', function(event){
    const password1=input1.value;
    const password2=input2.value;

    if(password1!==password2){
        input1.style.border="1px solid red";
        input2.style.border="1px solid red";
        event.preventDefault();
    }
})