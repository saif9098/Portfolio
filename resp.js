let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
let sidemenu =document.getElementById('sidemenu')
function opentab(tabname){
    
    for(let tablink of tablinks){
       tablink.classList.remove('active-link')
    
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }

    
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

function savedata(){
    let name =document.getElementById('name-input')
    let email = document.getElementById('mail-input');
    let suggestion = document.getElementById('desc-input');

    localStorage.setItem("suggestion",suggestion.value);
    localStorage.setItem("email",email.value);
    if(!email.value=='' && !suggestion.value==''){
        alert('your suggestion has sent ')
        }
    name.value='';
    email.value='';
    suggestion.value='';
   
    

}