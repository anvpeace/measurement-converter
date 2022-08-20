let measurment = 0;

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;


let measurementInput = document.getElementById("meas-val");

const convertBtn = document.getElementById("conversion-btn");

const meterConversion = document.getElementById("meter");
const literConversion = document.getElementById("liter");
const kiloConversion = document.getElementById("kilo");



 // on click of the convert btn the measurementInput value will be multiplied
    // by conversionNum * 3.281 feet
    // conversionNum * 0.264 gallon
    // conversionNum * 2.204 pound
    // then use inner html on the conversion-content div

convertBtn.addEventListener("click", function(){
   
    let conversionNum = measurementInput.value

    let meterFeetConvert = conversionNum * meter;
    let literGallonConvert = conversionNum * liter;
    let kiloPoundConvert = conversionNum * kilo;

    var meterNum = meterFeetConvert.toFixed(3);
    var literNum = literGallonConvert.toFixed(3)
    var kiloNum = kiloPoundConvert.toFixed(3);

    // meterFeetConvert
    // literGallonConvert
    // kiloPoundConvert

    meterConversion.innerHTML = `${conversionNum} meters = ${meterNum} feet | ${meterNum} feet = ${conversionNum} meters`

    literConversion.innerHTML = `${conversionNum} liters = ${literNum} gallons | ${literNum} gallons = ${conversionNum} liters`

    kiloConversion.innerHTML = `${conversionNum} kilos = ${kiloNum} pounds | ${kiloNum} pounds = ${conversionNum} kilos`
        
})








