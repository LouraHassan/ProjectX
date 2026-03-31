const destinations = [
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
    country: "France",
    rating: 4.8,
    type: "City",
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?w=400&h=300&fit=crop",
    country: "Japan",
    rating: 4.7,
    type: "City",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    country: "Maldives",
    rating: 4.9,
    type: "Beach",
  },
  {
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=300&fit=crop",
    country: "USA",
    rating: 4.6,
    type: "City",
  },
  {
    name: "Rome",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&h=300&fit=crop",
    country: "Italy",
    rating: 4.7,
    type: "City",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    country: "Indonesia",
    rating: 4.8,
    type: "Beach",
  },
  {
    name: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
    country: "Switzerland",
    rating: 4.9,
    type: "Mountain",
  },
  {
    name: "Phuket",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop",
    country: "Thailand",
    rating: 4.5,
    type: "Beach",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    country: "UAE",
    rating: 4.7,
    type: "City",
  },
  {
    name: "Santorini",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=300&fit=crop",
    country: "Greece",
    rating: 4.9,
    type: "Beach",
  },
  {
    name: "Banff",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop",
    country: "Canada",
    rating: 4.8,
    type: "Mountain",
  },
  {
    name: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
    country: "South Africa",
    rating: 4.7,
    type: "Beach",
  },
  {
    name: "Istanbul",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop",
    country: "Turkey",
    rating: 4.6,
    type: "City",
  },
  {
    name: "Machu Picchu",
    image:
      "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=400&h=300&fit=crop",
    country: "Peru",
    rating: 4.9,
    type: "Mountain",
  },  
  {
    name: "Hawaii",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
    country: "USA",
    rating: 4.8,
    type: "Beach",
  },
];
const filtersArr = ["All", "City", "Beach", "Mountain"];
const container = document.getElementById("container");
const filters = document.getElementById("filtersDiv");


const displayDestinations = (data) => {
  container.innerHTML = "";
  data.map((item) => {
   
     const badgeColor = ()=>{ 
        if(item.type === 'City'){
            return 'text-bg-primary'
        }else if(item.type === "Beach"){
            return 'text-bg-success'
        }else{
            return 'text-bg-danger'
        }
     }
    container.innerHTML += `   <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
        <img src="${item.image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">${item.name}</h5>
        <p class="text-warning">★ <strong>${item.rating}</strong></p>
        </div>
        <p class="card-text">${item.country}</p>
        <span class="badge ${badgeColor()}">${item.type}</span>
        </div>
        </div>
        </div>`;
  });
};
const filterDestinations = (type, button) => {
  showActiveFilter(button);
  if (type === "All") {
    displayDestinations(destinations);

  }else if(type === "Favorite"){
const favoriteList = destinations.filter((item) => item.isFavorite === true);
displayDestinations(favoriteList)
  } 
  
  else {
    const filtered = destinations.filter((item) => item.type === type);
    displayDestinations(filtered);
  }
};
const filterButtons = () => {
  for (let i = 0; i < filtersArr.length; i++) {
    filters.innerHTML += `<button
    class="btn btn-outline-primary me-2"
    data-type="${filtersArr[i]}"
    onclick="filterDestinations('${filtersArr[i]}', this)"
    >${filtersArr[i]}</button>`;
  }
};
const showActiveFilter = (button) => {
  document
    .querySelectorAll(".btn-outline-primary")
    .forEach((btn) => btn.classList.remove("filter-active"));
  if (button) {
    button.classList.add("filter-active");
  }
};
displayDestinations(destinations);
filterButtons();

const defaultButton = document.querySelector('[data-type="All"]');
if (defaultButton) {
  showActiveFilter(defaultButton);
}
