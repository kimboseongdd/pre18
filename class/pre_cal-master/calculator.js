// 힌트
// input 태그의 값을 가져올 때
// document.getElementById(" ").value 를 이용할 수 있습니다
// 가져온 값의 타입은 문자열입니다. 숫자로 어떻게 변환해야 할까요?

// 가이드
// 1. input 태그의 값을 가져와 변수에 할당한다
// 2. 결과를 담을 변수를 만들고, 연산 결과를 변수에 할당한다
// 3. html의 결과 박스(id="result")의 내용을 결과값으로 바꿔준다

function add () 
{
     let a = Number(document.getElementById("a").value)
     let b = Number(document.getElementById("b") .value)
     let result = a + b
     document.getElementById("result").innerText = result

  }

    
    

//<>태그 안에는 inner 나머지는 value



// // function hello() {
//     alert("안녕하세요")
// }

// function hello2(userName) {
//     console.log(userName + "님 안녕하세요")
// }

// hello2("김보성")

// function hello3(a, b) {
//     return `${a}님, ${b}님 환영합니다`
// 

// hello3("김","이")
// '김님, 이님 환영합니다'


// function hellofriend(props) {
//     for(let i = 0; i < props.length; i++) {
//         console.log(props[i] + '님 반갑습니다')
//     }
// }

// hellofriend(students)
// VM1855:3 철수님 반갑습니다
// VM1855:3 영희님 반갑습니다
// VM1855:3 도우너님 반갑습니다
// VM1855:3 말포이님 반갑습니다
// VM1855:3 도비님 반갑습니다
// VM1855:3 그루트님 반갑습니다
