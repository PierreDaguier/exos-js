'use strict'
function add(a,b)
{return a+b}

function sub(a,b)
{return a-b}

function mul(a,b)
{return a*b}

function div(a,b)
{return a/b}

function calc(str,a,b){
    if(str==='+'){
        return console.log(add(a,b))
    }
    else if(str==='-'){
        return console.log(sub(a,b))
    }
    else if(str==='*'){
        return console.log(mul(a,b))
    }
    else if(str==='/'){
        return console.log(div(a,b))
    }
    else return null
}