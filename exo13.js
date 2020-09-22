'use strict'

function recur(a){
    a=a+1
    if (a==1000)
        {return console.log(a)}
    else {
        console.log(a)
        recur(a)}
}

