function validate()
{
    const username=document.getElementById("username").Value;
    const password=document.getElementById("password").Value;
    if(username=="0" && password=="0" )
    {
        alert("login succesfully");
        return true
    }
    else
    {
        alert("login feild " )
        return false
    }
}
const form=document.getElementById('form');
const username1=document.getElementById('username1');
const pasportNo=document.getElementById('pasportNo');
const Email=document.getElementById('Email');
const phone=document.getElementById('phone');
const country=document.getElementById('country');
const nationality=document.getElementById('nationality');
const program=document.getElementById('program');

form.addEventListener('form',(e)=>{
    e.preventDefault();
    checkInputs();
});
function  checkInputs(){
    
   const username1value=username1.Value.trim();
    const pasportNovalue=pasportNo.Value.trim();
    const Emailvalue=Email.Value.trim();
   const phonevalue=phone.Value.trim();
    const countryvalue=country.Value.trim();
   const nationalityvalue=nationality.Value.trim();
    const programvalue=program.Value.trim();
 if(username1value===" "){

    setErrorFor(username1,'user name cannot be blank')
            }
                else{
        setSuccessFor(username1);
                
            }
        }
        function setErrorFor(input,message)
        {
            const formControl=input.parentElement;
            const small = formControl.queryselctor('small');
            small.innerText =message;
            formControl.className='formcontrol error';
        }
       function setSuccessFor(input){
           const formControl=input.parentElement;
           formControl.className='formcontrol success;'

       }
       
        