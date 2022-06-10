 let isStarted = false 

 const token = () => {



    if(isStarted === false ) {
    //타이머가 돌고 있지 않다면 코드 실행
    isStarted = true

    const authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("auth").innerText = authNum
    document.getElementById("auth").style.color = '#' + authNum
    document.getElementById("finish").disabled = false
    
    let time = 180
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





    



// if(profile.age >= 20) {
//     console.log('성인입니다')
// } else if (profile.age>=8) {
//     console.log('학생입니다')
// } else  {}








    // function token()  {
    //     const authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    //     document.getElementById("auth").innerText = authNum
    //     document.getElementById("auth").style.color = '#' + authNum
    // 







// }

//1초는 1000ms