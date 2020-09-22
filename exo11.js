'use strict'

function makeUnique(list){
    if (typeof(list)!="array"){
        return null
    }
    else {return Array.from(new Set(list.sort()))}}
