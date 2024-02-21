function calc(){
        
    var HD = document.getElementById("Hydration").value;
    var NS = document.getElementById("Servings").value;
    var SR = document.getElementById("Starter").value;
    if(HD == NaN | NS == NaN | SR == NaN){
        document.getElementById("FlourNeeded").innerHTML = "0";
        document.getElementById("WaterNeeded").innerHTML = "0";
        document.getElementById("SaltNeeded").innerHTML = "0";
        document.getElementById("ServingsNeeded").innerHTML = "0";
        document.getElementById("StarterNeeded").innerHTML = "0";
        document.getElementById("SourNeeded").innerHTML = "It seems there was an error calculating your recipe, try to enter a number between 55 and 120 for Hydration [%] and numbers greater than 0 for Number of Servings and Amount of Starter [g]";
        return;

    }
    var starter = parseFloat(SR);
    var TotalFlour = parseFloat(NS)*65;
    if (starter > (TotalFlour/5)){
        var starter = TotalFlour/5;
    }
    var Flour = TotalFlour-(starter/2);
    var Water = parseInt(HD)/100*TotalFlour-(starter/2);
    var Salt = Flour*.02;
    var Sourness = starter/Flour;
    
    document.getElementById("FlourNeeded").innerHTML = "<br>" + Flour.toFixed(0)+"g";
    document.getElementById("WaterNeeded").innerHTML = "<br>" + Water.toFixed(0)+"g";
    document.getElementById("SaltNeeded").innerHTML = "<br>" + Salt.toFixed(1)+"g";
    //document.getElementById("ServingsNeeded").innerHTML = parseFloat(NS).toFixed(0);
    document.getElementById("StarterNeeded").innerHTML = "<br>" + starter.toFixed(0)+"g";
    if(Sourness < .05){
        var sour = "This is a very sour loaf, if you want a more mellow loaf,<br> consider increasing the amount of starter";
    }
    else if (Sourness < .1){
        var sour = "This is a sour loaf, if you want a more mellow loaf,<br> consider increasing the amount of starter, if you would like a more sour loaf, consider decreasing the amount of starter you use";
    }
    else if (Sourness < .15){
        var sour = "This is a medium sourness loaf, if you want a more mellow loaf,<br> consider increasing the amount of starter, if you would like a more sour loaf, consider decreasing the amount of starter you use";
    }
    else{
        var sour = "This is a mellow loaf, if you'd like a more sour loaf,<br> consider decreasing the amount of starter";
    }

    // document.getElementById("SourNeeded").innerHTML = sour;
}