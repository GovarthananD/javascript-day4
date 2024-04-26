async function fetchCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let values = "";
    data.map((items) => {
      console.log(items.flags.png);
      values += `<div class="card">
            <img src=${items.flags.png} alt="pic" class="images" />
            <h3 class="name">${items.name}</h3>
            <h4 class="price">${items.region}</h4>
            <h5 class="description">${items.subregion}</h5>
            <h5 class="description">${items.population}</h5>
            </div>`;
    });
    document.getElementById("cards").innerHTML = values;
  } catch (error) {
    console.log(error);
  }
}
fetchCountry();
