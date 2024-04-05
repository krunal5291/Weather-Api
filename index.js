

const ui = (data) => {
    let temp = `
        <div>
            <h1>${data.name}</h1>
            <h3>${data.main.temp}°C</h3>
            <h3> Max temperature: ${data.main.temp_max}°C<?h3>
                 <h3> Min temperature: ${data.main.temp_min}°C</h3>
        </div>`;

    document.getElementById("ui").innerHTML = temp;
}



const getWeather = async (city) => {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35a0207691bed57a04b2d7f056f7dd83&units=metric`);
        let data = await res.json();
        ui(data);
    }


const api = (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;
    getWeather(city);
}



document.getElementById("form").addEventListener("submit", api);