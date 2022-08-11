setInterval(setClock,1000)


const hourhand=document.querySelector('[data-hour-hand]');
const minutehand=document.querySelector('[data-minute-hand]');
const secondhand=document.querySelector('[data-second-hand]');
function  setClock(){
const  currentDate=new Date();

const sekund=currentDate.getSeconds()/60;

const minut=(sekund+currentDate.getMinutes())/60;
const soat=(minut+currentDate.getHours())/12;
 setRotation(secondhand,sekund);
 setRotation(minutehand,minut);
 setRotation(hourhand,soat);
}
function  setRotation(element,rotationRadio){
    element.style.setProperty('--rotation',rotationRadio*360);
}
setClock();