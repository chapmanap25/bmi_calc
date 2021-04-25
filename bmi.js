$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{
    // gather all input

    // ask user for total weight
    // convert to number type
    let totalWeight = parseFloat( $("#weightInPounds").val() );

    // ask user for total height
    // convert to number type
    let totalHeight = parseFloat( $("#heightInInches").val() );

    // do some math...
    // do math for BMI
    let totalBmi = ((totalWeight / (totalHeight * totalHeight)) * 703);

    // define the BMI categories
    let BMIstring = "";

    switch (true) {
        case totalBmi > 30:
            BMIstring = "Obese";
break;
        case totalBmi > 25:
            BMIstring = "Overweight";
break;
        case totalBmi > 18.5:
            BMIstring = "Normal";
break;
        case totalBmi > 16:
            BMIstring = "Underweight";
break;
    }

    // OUTPUT!

    // alert the gas cost
    // alert(`You will pay $${gasCost.toFixed(2)} for gas`);
    $("span#totalBmi").text(totalBmi.toFixed(1));

    // alert the hours
    // alert(`You will drive for ${totalHours.toFixed(1)} hours`);
    $("span#BMIstring").text(BMIstring);

    $(".output").show();
}