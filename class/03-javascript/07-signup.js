function cheakVaildation(){
    const email = document.getElementById("email").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value

    // console.log(email)
    // console.log(pw1)
    // console.log(pw2)

    if(email !== "" && pw1 !=="" && pw2 !== ""){
    // 버튼 활성화
    document.getElementById("submit").disabled = false
    document.getElementById("submit").setAttribute("style","background-color: gray")
    } else {
    // 버튼 비활성화
    document.getElementById("submit").disabled = true
    document.getElementById("submit").setAttribute("style","background-color: none")
    }
}