const wrapper=document.querySelector('.wrapper');
const form=wrapper.querySelectorAll('.form');
const submit=form[0].querySelector('input[type="submit"]');
function signup(e){
    e.preventDefault();
    var formData=new FormData(form[0]);
    console.log(formData.get('firstname')+'-'+formData.get('middlename')+'-'+
    formData.get('lastname')+'-'+formData.get('password')+'-'+formData.get('confirmpassword')
    
    
    
    );
}
document.addEventListener('DOMContentLoaded',function(){
    submit.addEventListener('click',signup,false);
},false);
