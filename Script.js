//This is the first problem - SLEEP_IN
function sleep_in(weekday,vacation) {

    if (weekday == true && vacation == true){
        var sleep = true;
    }
    if (weekday == true && vacation == false){
        var sleep = false;
    }
    if (weekday == false && vacation == false){
        var sleep = true;
    }
    if (weekday == false && vacation == true){
        var sleep = true;
    }

    return sleep;

}

//This is the second problem - MONKEY_TROUBLE
function monkey_trouble(a,b) {

    if (a == true && b == true){
        var trouble = true;
    }
    if (a == true && b == false){
        var trouble = false;
    }
    if (a == false && b == false){
        var trouble = true;
    }
    if (a == false && b == true){
        var trouble = false;
    }

    return trouble;

}
function string_times(string,num){
    var ans = ""
    for(var i=0; i<num;i++){
        ans = ans + string;
    }
    return ans;

}

function front_times(string,num){
    var ans = "";
    for(var i=0;i<num;i++){
        ans = ans + string.substring(0);
    }
    return ans;
}

function string_bits(string,num){
    var ans = ""
    var num = string.length/4;
    var add =  string.length/string.length + string.length/string.length ;
    for(var i=0;i< num ;i++){
         add =  string.length/string.length + string.length/string.length ;
        ans = ans + string.charAt(0) + string.charAt(add);
        string.length = ans



    }
    return ans;

}


function caughtSpeeding(speed,birthday) {
    if (birthday == true){
        speed = speed - 5;
    }
    if (birthday == false){
        var speed = speed;
    }
    if (speed <=60 ){
        var ticket = "0";
    }
    if (speed >=61 && speed <=80){
        var ticket = "1";
    }
    if (speed >= 81){
        var ticket = "2";
    }



    return ticket;
}

function fizz_buzz(num){
    if (num %3 ==0 && num%5 == 0){
        return "FizzBuzz";
    }
    if (num % 5 == 0){
        return "Buzz";
    }
    if (num %3 == 0){
        return"Fizz";
    }
    else{
        return num +"!";
    }



}

function teaParty(tea,candy){
    if ( tea< 5 || candy<5){
        return "0";
    }
    if (tea >= candy + candy || candy >= tea + tea){
        return "2";
    }
    if (tea >=5 && candy >=5){
        return "1";
    }

}
function blackjack(num1,num2){
    var dif1 = 21 - num1;
    var dif2 = 21 - num2;

    if(num1==19 && num2 == 21){
        return num2;
    }
    if(num1>21 && num2>21){
        return "0";
    }
    if(num1>21 && num2<21){
        return num2;
    }
    if(num2>=21 && num1<=21){
        return num1;
    }
    if(dif1 < dif2){
        return num1;
    }
    if(dif2<dif1){
        return num2;
    }


}


function loneSum(a,b,c){
    var sum = a + b + c;
    if(a==b && a==c){
        return "0";
    }
    if (a == b){
        var sum = sum-b-a;
    }
    if (a==c){
        var sum = sum -a -c;
    }
    if(b==c){
        var sum= sum -b-c;
    }

    return sum;
}
//function runs on click and outputs test cases you create to page
        function tester() {
            document.getElementById("output").innerHTML += sleep_in(true, false);
            document.getElementById("output").innerHTML += monkey_trouble(true, false);
            document.getElementById("output").innerHTML += sleep_in(false, false);
            document.getElementById("output").innerHTML += monkey_trouble(true, false);
            document.getElementById("output").innerHTML += sleep_in(true, true);
            document.getElementById("output").innerHTML += monkey_trouble(true, false);
            document.getElementById("output").innerHTML += sleep_in(true, false);
            document.getElementById("output").innerHTML += monkey_trouble(true, false);
            document.getElementById("output").innerHTML += sleep_in(true, false);
            document.getElementById("output").innerHTML += monkey_trouble(true, false);
            //test third method, etc
        }

// This is the third problem- STRING-TIMES
