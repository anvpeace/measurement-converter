let measurment = 0;

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

const centi = 0.393;
const milli = 0.004;
const gram = 0.035;



let measurementInput = document.getElementById("meas-val");

const convertBtn = document.getElementById("conversion-btn");

const meterConversion = document.getElementById("meter");
const literConversion = document.getElementById("liter");
const kiloConversion = document.getElementById("kilo");

const centiConversion = document.getElementById("centimeter");
const milliConversion = document.getElementById("milliliter")
const gramConversion = document.getElementById("gram")



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

    let centiInchesConvert = conversionNum * centi;
    let milliCupsConvert = conversionNum * milli;
    let gramsOuncesConvert = conversionNum * gram;


    var meterNum = meterFeetConvert.toFixed(3);
    var literNum = literGallonConvert.toFixed(3)
    var kiloNum = kiloPoundConvert.toFixed(3);

    var centiNum = centiInchesConvert.toFixed(3);
    var milliNum = milliCupsConvert.toFixed(3);
    var gramNum = gramsOuncesConvert.toFixed(3)


    // meterFeetConvert
    // literGallonConvert
    // kiloPoundConvert

    meterConversion.innerHTML = `${conversionNum} meters = ${meterNum} feet | ${meterNum} feet = ${conversionNum} meters`
    centiConversion.innerHTML = `${conversionNum} centimeter = ${centiNum} inches | ${centiNum} inches = ${conversionNum} centimeters`

    literConversion.innerHTML = `${conversionNum} liters = ${literNum} gallons | ${literNum} gallons = ${conversionNum} liters`
    milliConversion.innerHTML = `${conversionNum} milliliters = ${milliNum} cups | ${milliNum} cups = ${conversionNum} milliliters`


    kiloConversion.innerHTML = `${conversionNum} kilos = ${kiloNum} pounds | ${kiloNum} pounds = ${conversionNum} kilos`
    gramConversion.innerHTML = `${conversionNum} grams = ${gramNum} ounces | ${gramNum} ounces = ${conversionNum} grams`
        
})








