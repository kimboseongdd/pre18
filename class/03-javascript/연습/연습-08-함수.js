function hello() {
    alert("안녕하세요")
}

function hello2(userName) {
    console.log(userName + "님 안녕하세요")
}

hello2("김보성")

function hello3(a, b) {
    return `${a}님, ${b}님 환영합니다`


hello3("김","이")
'김님, 이님 환영합니다'


function hellofriend(props) {
    for(let i = 0; i < props.length; i++) {
        console.log(props[i] + '님 반갑습니다')
    }
}

hellofriend(students)
철수님 반갑습니다
영희님 반갑습니다
도우너님 반갑습니다
말포이님 반갑습니다
도비님 반갑습니다
그루트님 반갑습니다

const hello = (name) => {
    alert(name + "안녕하세요")
}