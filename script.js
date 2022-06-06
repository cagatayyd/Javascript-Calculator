var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var x = document.getElementById("x");
var divide = document.getElementById("divide");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var AC = document.getElementById("AC")
var hundred = document.getElementById("hundred")
var comma = document.getElementById("comma")
one.onclick = function () {
    result.innerHTML += "1"
    }
two.onclick = function () {
    result.innerHTML += "2"
    }
three.onclick = function () {
    result.innerHTML += "3"
    }
four.onclick = function () {
    result.innerHTML += "4"
    }
five.onclick = function () {
    result.innerHTML += "5"
    }
six.onclick = function () {
    result.innerHTML += "6"
    }
seven.onclick = function () {
    result.innerHTML += "7"
    }
eight.onclick = function () {
    result.innerHTML += "8"
    }
  

nine.onclick = function () {
    result.innerHTML += "9"
    }
zero.onclick = function () {
    result.innerHTML += "0"
    }
plus.onclick = function () {
    result.innerHTML += "+"
    }  
minus.onclick = function () {
    result.innerHTML += "-"
    }
x.onclick = function () {
    result.innerHTML += "*"
    }
divide.onclick = function () {
    result.innerHTML += "/"
    }
AC.onclick = function () {
    result.innerHTML = ""
}
comma.onclick = function () {
    result.innerHTML += "."
    }

hundred.onclick = function () {
    result.innerHTML += "/100"
    let x = document.getElementById('result').textContent
    let y = eval(x);
    document.getElementById('result').innerHTML = y
    return y
    }
solve.onclick = function solve(){
    let x = document.getElementById('result').textContent
    let y = eval(x);
    document.getElementById('result').innerHTML = y
    return y
}