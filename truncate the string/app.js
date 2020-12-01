function truncateString(str, num) {
 
    if(str.length <= num){
        
           return str;
    }  
    else{ 
 return str.splice(0,num) + "..."
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  