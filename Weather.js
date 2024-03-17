
        const apiKey="ec14a4dfa7ea7571919e4dcaa94d8cfd";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        var serchinput=document.querySelector(".serch div input");
        var serchbtn=document.querySelector(".srchBtn button");
        var weatherIcon=document.querySelector(".weather-icon");
        async function checkweather(city){
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                document.querySelector(".error").style.display="none";
                var data=await response.json();
                console.log(data);
                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
                document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
                document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

                if(data.weather[0].main=="Clouds" || data.weather[0].main=="Haze"){
                    weatherIcon.src="image/clouds.png"
                }
                else if(data.weather[0].main=="Clear"){
                    weatherIcon.src="image/clear.png"
                }
                else if(data.weather[0].main=="Rain"){
                    weatherIcon.src="image/rain.png"
                }
                else if(data.weather[0].main=="Drizzle"){
                    weatherIcon.src="image/drizzle.png"
                }
                else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="image/mist.png"
                }
                else if(data.weather[0].main=="Snow"){
                    weatherIcon.src="image/snow.png"
                }
                document.querySelector(".weather").style.display="block";
        }
        }
            
        
        serchbtn.addEventListener("click",()=>{
            checkweather(serchinput.value);
        });
        
  