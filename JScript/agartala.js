const agartala = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b9a91e6acmsh861064df709e452p1577cajsnfb4fef5bc04b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', agartala)
	.then(response => response.json())
	.then(response => {
		agt_feels_like.innerHTML = response.feels_like
		agt_humidity.innerHTML = response.humidity
		agt_max_temp.innerHTML = response.max_temp
		agt_min_temp.innerHTML = response.min_temp
		agt_sunrise.innerHTML = response.sunrise
		agt_sunset.innerHTML = response.sunset
		agt_wind_degree.innerHTML = response.wind_degrees
		agt_wind_speed.innerHTML = response.wind_speed
		console.log(response)
	
	
	})
	.catch(err => console.error(err));