
function nameHello (){
    while(true){
        let MyName = prompt('Как вас зовут?');
            if (MyName.trim() != ""){
                alert('Здравствуйте, ' + MyName.trim() + '!');
                break;
            }
    }
}
