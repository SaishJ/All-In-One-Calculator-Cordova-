function lengthConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputMeters = document.getElementById("inputMeters");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputInches = document.getElementById("inputInches");
    var inputFeet = document.getElementById("inputFeet");
    var inputMiles = document.getElementById("inputMiles");
    
    if (source=="inputMeters") {
        inputKilometers.value=(valNum/1000).toFixed(5);
        inputInches.value=(valNum*39.370).toFixed(2);
        inputFeet.value=(valNum*3.2808).toFixed(2);
        inputMiles.value=(valNum*0.00062137).toFixed(5);
    }
    
    if (source=="inputKilometers") {
        inputMeters.value=(valNum*1000).toFixed();
        inputInches.value=(valNum*39370).toFixed();
        inputFeet.value=(valNum*3280.8).toFixed();
        inputMiles.value=(valNum*0.62137).toFixed(2); 
    }
    
    if (source=="inputInches") {
        inputMeters.value=(valNum/39.370).toFixed(3);
        inputKilometers.value=(valNum/39370).toFixed(6);
        inputFeet.value=(valNum*0.083333).toFixed(3);
        inputMiles.value=(valNum*0.000015783).toFixed(6);
    }
    
    if (source=="inputFeet") {
        inputMeters.value=(valNum/3.2808).toFixed(2);
        inputKilometers.value=(valNum/3280.8).toFixed(5); 
        inputInches.value=(valNum*12).toFixed(2);
        inputMiles.value=(valNum*0.00018939).toFixed(5);
    }
    
    if (source=="inputMiles") {
        inputMeters.value=(valNum/0.00062137).toFixed();
        inputKilometers.value=(valNum/0.62137).toFixed(2);   
        inputInches.value=(valNum*63360).toFixed();
        inputFeet.value=(valNum*5280).toFixed();
    }
}
