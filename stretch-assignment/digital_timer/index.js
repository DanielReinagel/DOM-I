window.onload = function() {
    let time = 0;
    const fullTimeDisplay = document.querySelectorAll(".digit");
    const shownTime = [document.getElementById("msTens"), document.getElementById("msHundreds"), document.getElementById("secondOnes"), document.getElementById("secondTens")];
    shownTime.forEach(item => item.textContent = "0");
    function updateTime(){
        if(time<1000){
            time++;
            const timeArray = String(time).split("").reverse();
            timeArray.forEach((value, index) => shownTime[index].textContent = value);
            if(time===1000) fullTimeDisplay.forEach(item => item.style.color="red");
        }
    }
    setInterval(updateTime, 10);
}