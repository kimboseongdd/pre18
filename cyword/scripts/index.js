// iframe 태그가 불러오는 소스를 변경한다
// 눌렸을때 선택div 배경을 흰색으로 눌렸을 때 검은색으로
// 선택되지 않은 div의 배경색과 글씨색을 원래대로

const menuHome = () => {

    document.getElementById("contentFrame").setAttribute("src","home.html")
    document.getElementById("menuHome").style="color: black; background-color: white;"
    document.getElementById("menuGame").style="color: white; background-color: #298eb5;"
    document.getElementById("menuJukebox").style="color: white; background-color: #298eb5;"

}

const menuGame = () => {

    document.getElementById("contentFrame").setAttribute("src","game.html")    
    document.getElementById("menuGame").style="color: black; background-color: white;"
    document.getElementById("menuHome").style="color: white; background-color: #298eb5;"
    document.getElementById("menuJukebox").style="color: white; background-color: #298eb5;"
}

const menuJukebox = () => {

    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("menuJukebox").style="color: black; background-color: white;"
    document.getElementById("menuGame").style="color: white; background-color: #298eb5;"
    document.getElementById("menuHome").style="color: white; background-color: #298eb5;"
}