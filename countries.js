let allCountries = [];

const regionColors = {
  'Africa': 'danger',
  'Americas': 'primary',
  'Asia': 'success',
  'Europe': 'info',
  'Oceania': 'warning'
};

function getColorClass(region) {
  return regionColors[region] || 'secondary';
}

function getCountries() {
  const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      allCountries = data;
      populateRegionFilter(data);
      displayCountries(data);
    });
}

function populateRegionFilter(countries) {
  const regions = [...new Set(countries.map(c => c.region))].sort();
  const filterSelect = document.getElementById('regionFilter');
  
  regions.forEach(region => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    filterSelect.appendChild(option);
  });
  
  filterSelect.addEventListener('change', (e) => {
    filterByRegion(e.target.value);
  });
}

function filterByRegion(region) {
  if (region === 'all') {
    displayCountries(allCountries);
  } else {
    const filtered = allCountries.filter(country => country.region === region);
    displayCountries(filtered);
  }
}

function displayCountries(countries) {
  const container = document.getElementById('countriesContainer');
  container.innerHTML = '';
  
  countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-3';
    
    const capital = country.capital ? country.capital[0] : 'N/A';
    const flagUrl = country.flags ? country.flags.png : '';
    const countryName = country.name ? country.name.common : 'N/A';
    const region = country.region || 'N/A';
    const badgeColor = getColorClass(region);
    
    card.innerHTML = `
      <div class="card h-100">
        <img src="${flagUrl}" class="card-img-top" alt="${countryName} flag" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${countryName}</h5>
          <p class="card-text">
            <strong>Capital:</strong> ${capital}<br>
            <span class="badge bg-${badgeColor}">${region}</span>
          </p>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

getCountries();