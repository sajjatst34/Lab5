let countryInfo = document.getElementById('country-info');
fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,area')
.then(response => response.json())
.then(data => {
    data.forEach(country => {
        countryInfo.innerHTML +=`
        <div class="country">
            <img src="${country.flags.svg}" height="100px" alt="Flag of ${country.name.common}">
            <h1>${country.name.common}</h1>
            <h4>${country.capital}</h4>
            <p>Area: ${country.area} km²</p>
            <p>Currency: ${Object.keys(country.currencies)}</p>
        </div>
    `;
    });
    console.log(data);
})