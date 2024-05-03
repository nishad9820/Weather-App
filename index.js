


// fetch('http://api.weatherapi.com/v1/current.json?key=116a8897e45f476da74180353241204&q=London&aqi=no')
// .then(res=>res.json())
// .then((val)=>{
//     console.log(val);
//     console.log(val.location.name);
//     console.log(val.current.humidity);
//     console.log(val.current.temp_c);
//     console.log(val.current.wind_kph);
//     console.log(val.current.condition.icon);
    
// })





document.querySelector('#btnn').onclick = function(){
    var val = document.querySelector('#inputdata').value;
    //console.log(val);

    if(val != null){

    fetchdata(val);


    document.querySelector('#inputdata').value = '';


    }
}

function fetchdata(city){

    console.log(city);

fetch(`http://api.weatherapi.com/v1/current.json?key=116a8897e45f476da74180353241204&q=${city}&aqi=no`)
.then(res=>res.json())
.then((val)=>{
    console.log(val);

    console.log(val.current.temp_c);
    var a = val.current.temp_c;
    var x = Math.ceil(a);
    document.querySelector('#tshow').innerHTML = `${x} &deg;C`;


    console.log(val.location.name);
    document.querySelector('#cname').innerHTML = `${val.location.name}`;


    console.log(val.current.humidity);
    document.querySelector('.ms-2').innerHTML = `${val.current.humidity}%`;


    console.log(val.current.wind_kph);
    document.querySelector('.ms-1').innerHTML = `${val.current.wind_kph} Km/h`;


    console.log(val.current.condition.icon);
    document.querySelector('#img').src = `${val.current.condition.icon}`;

    document.querySelector('.small').innerHTML = `${val.current.condition.text}`;


    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    document.querySelector('#stime').innerHTML = `${hours}:${minutes}`;

    document.querySelector('.ms-3').innerHTML = `${val.current.pressure_mb} MB`;




})



}