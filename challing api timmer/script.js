const date = new Date();
let nowday={
    today : date.getDate(),
    currentMonth:date.getMonth() + 1,
    currentYear:date.getFullYear()
}
document.getElementById('day').innerHTML=`${nowday.today} /`;
document.getElementById('month').innerHTML=`${nowday.currentMonth}/`;
document.getElementById('yaer').innerHTML=`${nowday.currentYear}`;
let time=document.querySelectorAll(".timming .time");
let submit=document.getElementById('submit')
const city=document.querySelector('#city');
const options=document.querySelectorAll('#city option');
let cityselected="";

submit.addEventListener("click",() => {
    
    options.forEach((option) => {

        if(option.selected==true){
            //start reqests


            
            cityselected=option.innerHTML;
            console.log(cityselected)
axios.get(` http://api.aladhan.com/v1/calendarByCity/${nowday.currentYear}/${nowday.currentMonth}?city=${cityselected}&country=SY`)
.then((response) => {
    time[0].innerHTML=response.data.data[nowday.today].timings.Fajr
    time[1].innerHTML=response.data.data[nowday.today].timings.Sunrise
    time[2].innerHTML=response.data.data[nowday.today].timings.Dhuhr
    time[3].innerHTML=response.data.data[nowday.today].timings.Asr
    time[4].innerHTML=response.data.data[nowday.today].timings.Maghrib
    time[5].innerHTML=response.data.data[nowday.today].timings.Isha



  console.log(response.data.data[nowday.today].timings)

}
)
          

        }
       
          
      
       })
}
)









