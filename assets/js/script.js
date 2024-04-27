document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=1bc492820ec789adf771df6f61516685&units=imperial";
  const fapi =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=1bc492820ec789adf771df6f61516685&units=imperial";
  let dataList = {};
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("city-name").innerText = data.name;

      const cityName = data.name;

      dataList.name = data.name;
      dataList.date = data.dt;
      dataList.main = data.main.temp;
      dataList.wind = data.wind.speed;
      dataList.humidity = data.main.humidity;

      document.querySelector("#day-temp").textContent =
        "Temp: " + dataList.main;
      document.querySelector("#day-wind").textContent =
        "Wind: " + dataList.wind;
      document.querySelector("#day-humidity").textContent =
        "Humidity: " + dataList.humidity;

      localStorage.setItem(cityName, JSON.stringify(dataList));
    });

  fetch(fapi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      dataList.main1 = data.list[6].main.temp;
      dataList.wind1 = data.list[6].wind.speed;
      dataList.humidity1 = data.list[6].main.humidity;

      document.querySelector("#day1-temp").textContent =
        "Temp: " + dataList.main1;
      document.querySelector("#day1-wind").textContent =
        "Wind: " + dataList.wind1;
      document.querySelector("#day1-humidity").textContent =
        "Humidity: " + dataList.humidity1;

      dataList.main2 = data.list[14].main.temp;
      dataList.wind2 = data.list[14].wind.speed;
      dataList.humidity2 = data.list[14].main.humidity;

      document.querySelector("#day2-temp").textContent =
        "Temp: " + dataList.main2;
      document.querySelector("#day2-wind").textContent =
        "Wind: " + dataList.wind2;
      document.querySelector("#day2-humidity").textContent =
        "Humidity: " + dataList.humidity2;

      dataList.main3 = data.list[22].main.temp;
      dataList.wind3 = data.list[22].wind.speed;
      dataList.humidity3 = data.list[22].main.humidity;

      document.querySelector("#day3-temp").textContent =
        "Temp: " + dataList.main3;
      document.querySelector("#day3-wind").textContent =
        "Wind: " + dataList.wind3;
      document.querySelector("#day3-humidity").textContent =
        "Humidity: " + dataList.humidity3;

      dataList.main4 = data.list[30].main.temp;
      dataList.wind4 = data.list[30].wind.speed;
      dataList.humidity4 = data.list[30].main.humidity;

      document.querySelector("#day4-temp").textContent =
        "Temp: " + dataList.main4;
      document.querySelector("#day4-wind").textContent =
        "Wind: " + dataList.wind4;
      document.querySelector("#day4-humidity").textContent =
        "Humidity: " + dataList.humidity4;

      dataList.main5 = data.list[38].main.temp;
      dataList.wind5 = data.list[38].wind.speed;
      dataList.humidity5 = data.list[38].main.humidity;

      document.querySelector("#day5-temp").textContent =
        "Temp: " + dataList.main5;
      document.querySelector("#day5-wind").textContent =
        "Wind: " + dataList.wind5;
      document.querySelector("#day5-humidity").textContent =
        "Humidity: " + dataList.humidity5;
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
});

retrievedataList();
