function isLeap() {
    
/**************Don't change the code above****************/    
    
    //Write your code here.
var leapYear = Number(prompt("Enter the year to check if it's a Leap year or not"));
    
if (leapYear % 4 === 0) {
    if (leapYear % 100 === 0) {
        if (leapYear % 400 === 0) {
            alert("Your given year is a Leap Year.");
        } else {
            alert("Your given year is not a Leap Year.");
        }
    } else {
        alert("Your given year is a Leap Year.");
    }
} else {
    alert("Your given year is not a Leap Year."); 
}

/**************Don't change the code below****************/    
}

isLeap();

