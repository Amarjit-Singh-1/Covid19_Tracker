window.onload =function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://api.covid19api.com/summary')
	.then(function(resp) {return resp.json() })
	.then(function(data) {
		console.log(data)
		let totalConfirmed = data.Countries[76].TotalConfirmed;
        let totalDeaths = data.Countries[76].TotalDeaths;
        let totalRecovered = data.Countries[76].TotalRecovered;
        let globaltotalConfirmed = data.Global.TotalConfirmed;
        let globaltotalDeaths = data.Global.TotalDeaths;
        let globaltotalRecovered = data.Global.TotalRecovered;

        document.getElementById('a').innerHTML=globaltotalConfirmed.toLocaleString('en');
        document.getElementById('b').innerHTML=globaltotalDeaths.toLocaleString('en');
        document.getElementById('c').innerHTML=globaltotalRecovered.toLocaleString('en');
        document.getElementById('d').innerHTML=totalConfirmed.toLocaleString('en');
        document.getElementById('e').innerHTML=totalDeaths.toLocaleString('en');
        document.getElementById('f').innerHTML=totalRecovered.toLocaleString('en');
	})
	.catch(function(){
		console.log("error");
	})
	setTimeout(getCovidStats,43200000)
}