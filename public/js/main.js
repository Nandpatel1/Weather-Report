const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_val = document.getElementById('temp_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please Write the name before search"; 
        datahide.classList.add('data_hide');
    }
    else{
        try{ 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=226ce5f611e677f6c44acf730df24237`;
            
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_val.innerHTML = arrData[0].main.temp;

            temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i> ";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i> ";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i> ";
            }
            else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i> ";
            }   

            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Please enter valid City Name"; 
            datahide.classList.add('data_hide'); 
        }
    }
}

submitBtn.addEventListener('click',getInfo);