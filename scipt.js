const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/USD_INR.json";
const dropdown = document.querySelector(".dropdown select");


for ( let select of dropdown){
    for ( currcode in countryLIst){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        
    }
}



