//window.alert("alert");
async function weather(){
var city=searchbox.value;
const apiurl=`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=52e9e3628f8886d735acd689975acc9e&q=${city}`;
var data= await fetch(apiurl);
var res= await data.json();
console.log(res);
//document.querySelector('#weather #temp')innerHTML=Math.round(res.main.temp)+"℃";
temp.innerHTML=Math.round(res.main.temp)+"℃";
document.querySelector('#weather h3').innerHTML=res.name;
humidity.innerHTML= (res.main.humidity)+"%";
wind.innerHTML=(res.wind.speed);

}
