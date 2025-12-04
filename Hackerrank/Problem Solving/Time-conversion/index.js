# Problem: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function timeConversion(s) {
   
    let abrDN = s.slice(-2); 
    let timePart = s.slice(0, -2);
    let timeParts  = timePart.split(":");   
    
    let hour = Number(timeParts [0]);
    if (abrDN === "PM" && hour !== 12){
        hour = hour + 12       
    }
    else if(abrDN === "AM" && hour === 12){
       hour =0;
    }   
    timeParts [0]=String(hour).padStart(2, "0");
     
    return timeParts .join(":")
}