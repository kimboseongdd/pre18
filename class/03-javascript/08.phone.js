function changefocus1 (){
    const phone1 = document.getElementById("phone1").value;

    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changefocus2 (){
    const phone1 = document.getElementById("phone2").value;

    if(phone1.length === 3) {
        document.getElementById("phone3").focus()
    }
}
