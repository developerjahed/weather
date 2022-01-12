
const API_KEY='a3f9d071144071cededc94869206549f';

const searchTemperature=()=>{
    const city=document.getElementById('city-name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data))

}

const setInnerText=(id, text)=>{
   document.getElementById(id).innerText=text;
   document.getElementById(id).innerText=text;
}
const displayTemp=temp=>{
    setInnerText('city', temp.name)
    setInnerText('temp', temp.main.temp)
    console.log(temp);
}