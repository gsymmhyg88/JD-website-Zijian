const demo1 = document.querySelector(".area")
const demo2 = document.querySelector(".board1")
const demo3 = document.querySelector(".LBT1").firstElementChild.children
const demo4 = document.querySelector(".LBT1").lastElementChild.children
const demo5 = document.querySelector(".LBT1")

const timeHour = document.querySelector(".MsTimeHour")
const timeMinute = document.querySelector('.MsTimeMin')
const timeSecond = document.querySelector('.MsTimeSec')
const timePerson = +new Date('2022-9-3 22:00:00')

let LBT1num = 1

demo1.addEventListener("mouseenter",()=>{
    demo1.lastElementChild.style.color = 'red'
    demo1.style.backgroundColor = '#fff'
    demo2.style.display = 'block'
})
demo2.addEventListener("mouseleave",()=>{
    demo1.lastElementChild.style.color = '#999'
    demo1.style.backgroundColor = '#E3E4E5'
    demo2.style.display = 'none'
})
function LB1() {
    LBT1num++
    LBT1num >5 ? LBT1num=1 :1
    if(LBT1num == 1){
        demo3[4].setAttribute("number","0")
        demo3[LBT1num-1].setAttribute("number","1")

        demo4[4].setAttribute("number","0")
        demo4[LBT1num-1].setAttribute("number","1")
    }
    else{
    demo3[LBT1num-2].setAttribute("number","0")
    demo3[LBT1num-1].setAttribute("number","1") 

    demo4[LBT1num-2].setAttribute("number","0")
    demo4[LBT1num-1].setAttribute("number","1") 
    } 
}
function ZDLB1(){
    timeLB1 = setInterval(LB1,3000)
}
ZDLB1();
demo5.addEventListener("click",(e)=>{
    if(e.target.id == 'theDIV'){
        clearInterval(timeLB1)
        LB1()
        LB1()
        LB1()
        LB1()
        ZDLB1();
    }
    if(e.target.id == 'theLBTDIV'){
        clearInterval(timeLB1)
        LB1()
        ZDLB1();
    }
})

function getTime() {
    let timeNow = +new Date();
    let timeChange = (timePerson - timeNow) /1000 

    let h = parseInt(timeChange/60/60%24)
    h<10 ? 0+'h':h
    timeHour.innerHTML = h

    let m = parseInt(timeChange/60%60)
    m<10 ? 0+'m':m
    timeMinute.innerHTML = m

    let s = parseInt(timeChange%60)
    s<10 ? 0+'s':s
    timeSecond.innerHTML = s
    
}
getTime()
setInterval(getTime,1000)
