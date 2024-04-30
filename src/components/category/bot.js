const FORM_DATA=document.querySelector('.form-data')
const ERROR_MESSAGE='Some error occurred!';
const SUCCESS_MESSAGE='Sent successfuly';

FORM_DATA.addEventListener('submit',formSend);

async function formSend(event){
    event.preventDefault();

    const TOKEN='6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ';
    const CHAT_ID='-41403';
    const URI_API='https://api.telegram.org/bot${TOKEN}/sendMessage';

    let message=`
    <b>Test info:</b>
    <b>Имя:${this.name.value}</b>
    <b>Фамилия:${this.surname.value}</b>
    `;

    const response =await fetch(URI_API,{
        method:'POST',
        headers:{
            "Content-Type" : "applicatio/json"
        },
        body:JSON.stringify({
            chat_id:CHAT_ID,
            text:message,
            parse_mode:'html'
        }),
    })

    const result =await response.json()

    if (result.ok){
        showMessaage(true);
        FORM_DATA.reset();
    }else{
        showMessaage(false);
        console.log(result)
    }
}

function showMessaage(isSuccess){
    let alert =document.querySelector('.alert');
    let text=document.querySelector('.alert p');
    let closeBtn=document.querySelector('.alert span');
    alert.classList.remove('hidden');

    if(isSuccess){
        alert.classList.add('alert-success');
        text.textContent=SUCCESS_MESSAGE;
    }else{
        alert.classList.add('alert-danger');
        text.textContent=ERROR_MESSAGE;
    }

    closeBtn.addEventListener('click',e =>{
        alert.classList.add('hidden')
    })
}