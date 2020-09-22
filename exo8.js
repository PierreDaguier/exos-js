'use strict'

function isPalindrome(mot)
{if (typeof(mot) !="string"){
    return null
}else {if (mot===mot.reverse()){
    return true
}else{return false}}
}