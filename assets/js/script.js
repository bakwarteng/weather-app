document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=1bc492820ec789adf771df6f61516685&units=imperial";
  fetch(api);

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("city-name").innerText = data.name;

      const cityName = data.name;

      let dataList = {
        name: data.name,
        main: data.main.temp,
        wind: data.wind.speed,
        humidity: data.main.humidity,
      };
      localStorage.setItem(cityName, JSON.stringify(dataList));
    });
});
const parsedLocal = retrievedataList();
const ul = document.querySelector(".searchHistory");
function retrievedataList() {
  const local = [];

  for (let i = 0; i < localStorage.length; i++) {
    let localS = localStorage.getItem(localStorage.key(i));
    const localP = JSON.parse(localS);
    local.push(localP);
  }
  return local;
}
parsedLocal.forEach((Ob) => {
  let li = document.createElement("li");
  li.textContent = Ob.name;
  ul.appendChild(li);
  let li2 = document.createElement("li");
  li2.textContent = `temperature: ${Ob.main} degrees`;
  ul.appendChild(li2);
  let li3 = document.createElement("li");
  li3.textContent = `wind speed ${Ob.wind} miles per hour:`;
  ul.appendChild(li3);
  let li4 = document.createElement("li");
  li4.textContent = `humidity ${Ob.humidity}%`;
  ul.appendChild(li4);
});

retrievedataList();
