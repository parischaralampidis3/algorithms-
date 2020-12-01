//while loop solution

function repeatStringNumTimes(str, num) {
    let repeatStr = "";
    while ( num > 0){
      repeatStr += str;
      num --;
    }
    return repeatStr;
    }
    
    repeatStringNumTimes("abc", 3);
    
    