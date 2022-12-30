const kolkata = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b9a91e6acmsh861064df709e452p1577cajsnfb4fef5bc04b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= kolkata', kolkata )
	.then(response => response.json())
	.then(response => {
	    kolk_feels_like.innerHTML = response.feels_like
	    kolk_humidity.innerHTML = response.humidity
	    kolk_max_temp.innerHTML = response.max_temp
	    kolk_min_temp.innerHTML = response.min_temp
	    kolk_sunrise.innerHTML = response.sunrise
	    kolk_sunset.innerHTML = response.sunset
	    kolk_wind_degree.innerHTML = response.wind_degrees
	    kolk_wind_speed.innerHTML = response.wind_speed
		console.log(response)
	
	
	})
	.catch(err => console.error(err));