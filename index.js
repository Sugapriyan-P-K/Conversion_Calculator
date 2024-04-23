/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById('convert-btn');
const inputNum = document.getElementById('input');
const lengthPara = document.getElementById('meter-feet');
const volumePara = document.getElementById('litre-gallon');
const massPara = document.getElementById('kilo-pound');
const perMeterToFeet = 3.281;
const perLitreToGallon = 0.264;
const perKiloToPound = 2.204;

const meterToFeet = function (number) {
    return number * perMeterToFeet;
}

const feetToMeter = function (number) {
    return number / perMeterToFeet;
}

const litreToGallon = function (number) {
    return number * perLitreToGallon;
}

const gallonToLitre = function (number) {
    return number / perLitreToGallon;
}

const kiloToPound = function (number) {
    return number * perKiloToPound;
}

const poundToKilo = function (number) {
    return number / perKiloToPound;
}


const conversion = function (number) {
    lengthPara.textContent = `${number} meters = ${meterToFeet(number).toFixed(3)} | ${number} feet = ${feetToMeter(number).toFixed(3)}`;
    volumePara.textContent = `${number} litres = ${litreToGallon(number).toFixed(3)} | ${number} gallon = ${gallonToLitre(number).toFixed(3)}`;
    massPara.textContent = `${number} Kilograms = ${kiloToPound(number).toFixed(3)} | ${number} pounds = ${poundToKilo(number).toFixed(3)}`;
}

convertBtn.addEventListener('click', function () {
    try {
        const number = Number(inputNum.value);
        if (!number) {
            throw "not a number";
        }
        conversion(number);
    } catch (err) {
        alert(err);
    }
})