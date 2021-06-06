const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');

const date=document.getElementById('date')
const time=document.getElementById('time')
const showCity=document.getElementById('show-city')
const temp=document.getElementById('tempertaure')
// const dataHide=document.getElementsByClassName('temp')
const imgStatus=document.getElementById('img-status')
const noshow=document.querySelector('.middle')
const dataHide=document.querySelector('.temp')


let d=new Date;
let hr=d.getHours();
let min=d.getMinutes();
// console.log(min);
if (hr<10) {
    hr='0'+hr;
}
if (min<10) {
    min='0'+min;
}
// console.log(hr);
time.innerHTML=`${hr} : ${min}`;
let day=d.getDay();
let curMon=d.getMonth();
let curDate=d.getDate();
let monAr=[
    "Jan",
    "feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
let dayAr=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thr",
    "Fri",
    "Sat"
]
date.innerHTML=`${dayAr[day]} ${curDate}, ${monAr[curMon]}`
const getInfo= async(event)=>{
    const cityVal=cityName.value;
    if (cityVal=="") {
        showCity.innerHTML =`<h4>Plz Enter City</h4>`;
        dataHide.classList.add('data-hide');
    }else{
        try {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=842cf735d9344f68aefc9d6175503a8c`
            const response=await fetch(url);
            let objData= await response.json();
            let arrData=[objData];
            // console.log("a");
            // console.log(arrData);
            dataHide.classList.remove('data-hide');
            showCity.innerHTML=`<h3>${arrData[0].name}</h3>`;

            temp.innerHTML=`${Math.round(arrData[0].main.temp-273)}<sup>0</sup>C`

            let weather=arrData[0].weather[0].main;
            if (weather=="Clouds") {
                imgStatus.innerHTML=`<i class="fas fa-cloud" ></i>`;
            }else if(weather=="Clear"){
                imgStatus.innerHTML=`<i class="far fa-sun"></i>`;
            }else if(weather=="Haze"){
                imgStatus.innerHTML=`<i class="fas fa-cloud-sun"></i>`;
            }else if(weather=="Rain"){
                imgStatus.innerHTML=`<i class="fas fa-cloud-sun-rain"></i>`;
            }

        } catch (error) {
            // console.log("aa");
            showCity.innerHTML =`<h4>Plz Enter Valid City Name</h4>`;   
            dataHide.classList.add('data-hide');
        }   
    }
}


getInfo()
submitBtn.addEventListener('click',getInfo)
