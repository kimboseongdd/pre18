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

let isStarted = false 

const token = () => {



   if(isStarted === false ) {
   //타이머가 돌고 있지 않다면 코드 실행
   isStarted = true

   const authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
   document.getElementById("auth").innerText = authNum
   document.getElementById("finish").disabled = false
   document.getElementById("auth2").disabled = true
   
   let time = 5
   let interval

   interval = setInterval(function(){
       console.log("동작중")
   
       if(time >=0){
   
       let min = Math.floor( time / 60 )
       let sec =  String( time % 60 ).padStart(2,"0") 
       document.getElementById("countdown").innerText = min + ":" + sec
       time = time - 1      
       } else {
           document.getElementById("finish").disabled = true
           isStarted = false
           clearInterval(interval)
       }
       
       
   
   
                         },1000)
               
                       
} else {isStarted === true
   //타이머가 돌고 있다면 => 코드를 실행하지 않음
   console.log("이미 타이머가 동작중입니다.")

}
}

function handleOnClick()     { 
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value


    if(email !== "" && pw1 !=="" && pw2 !== ""){
    alert('가입을 축하합니다');
    } else {

    alert('정보확인')
    }
}

    
  
//   }

