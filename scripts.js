var age1 = false
var age2 = null


var result = age2 && 1


if (result) document.getElementById("score").innerHTML = "zawsze sie spelni ten warunek bo ma jedynke"
else document.getElementById("score").innerHTML = "tak dla zasady zmieniam na &&"


///////////////////////////////////////////task 2


var variable = '2'

if (variable === 1) document.getElementById("score1").innerHTML = "return 1"
else if (variable === '1') document.getElementById("score1").innerHTML = "return 2"
else if (variable == 2) document.getElementById("score1").innerHTML = "return 3"
else document.getElementById("score1").innerHTML = "WTF!!?!?!?!??!"


////////////////////////////////////////////task 3


switch (variable) {
    case 1:
        document.getElementById("score4").innerHTML = "1"
        break;
    case '2':
        document.getElementById("score4").innerHTML = "\"1\""
        break;
    case 3:
        document.getElementById("score4").innerHTML = "2"
        break;
    case 0:
        document.getElementById("score4").innerHTML = "0"
        break;
    default:
        document.getElementById("score4").innerHTML = "default"

}

/////////////////////////////////////////////task 4

/*
var variable2
var firstCheck, secondCheck, thirdCheck
thirdCheck =
variable2  = firstCheck ? 'to jest 1' : secondCheck ? 'to jest "1"' : thirdCheck ? 'to jest 2' : 'to jest 0'






document.getElementById("score5").innerHTML = variable2
*/

//////////////////////////////////////////task 5

var tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(var i = 0; i < tablica.length; i++ ){





    document.getElementById("tab"+i).innerHTML = tablica[i]



}


/////////////////// time loop


// console.time()




///////////////////////task6

var tab = []
var counter = 0


for ( var i = 0; i < 10; i++){

    tab[i] = Math.round( Math.random())

    if(tab[i] < 0.5) counter++


console.log(tab[i])

}

console.log("mnieijszych liczb od 0.5 jest: "+ counter )


//////////////////////////task7 boil milk


var milkTemp = 20
var counter = 0

var additionalTemp = 0



for(;;){

    counter++

    additionalTemp = Math.round(Math.random()*10)

    milkTemp = milkTemp + additionalTemp

    if(milkTemp >= 100) break

}



document.getElementById("boiledMilk").innerHTML = "Mleko ugotowane i ma " + milkTemp + " stopni celsujuesza była to " + counter + "iteracja"




