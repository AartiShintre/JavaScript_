const day = "saturday"
 switch(day){
    case 'Monday' : 
    console.log("Today is monday");
    break;
    case 'Tuesday' :
    console.log("Today is tuesday");
    break;
    case 'Wednesday':
    console.log("Today is wednesday");
    break;
    case  'Thursday':
    console.log("today is Thursday");
    break;
    case 'friday':
    console.log("today is friday");
    break;
    case 'saturday' || 'sunday':
    console.log("Today is weekend");
    break;
    default:
        console.log("Wrong choice");
 }