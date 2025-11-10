let seconds;
let minutes;
let hours;

let cDay;
let cMon;
let cYer;


window.setInterval (digital , 1000);
window.setInterval (dayy , 1000);


// set active classes //


document.getElementById('sw1').addEventListener('click' , displaySecond);
document.getElementById('sw2').addEventListener('click' , displayfirst);

let elF = document.querySelector('.first');
let elS = document.querySelector('.second');

function displaySecond() {

    elS.classList.add('active');
    elF.classList.add('active');

}

function displayfirst() {

    elS.classList.remove('active');
    elF.classList.remove('active');
}



// end of active

function digital() {

    let date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();

    if (seconds < 10)
    {
        document.getElementById('sec').innerHTML = "0" + seconds.toString();  
    }
    else
    {
        document.getElementById('sec').innerHTML = seconds;   
    }

    if (minutes < 10)
    {
        document.getElementById('min').innerHTML = "0" + minutes.toString();
    }
    else
    {
        document.getElementById('min').innerHTML = minutes;    
    }

    if (hours < 10)
    {
        document.getElementById('hor').innerHTML = "0" + hours.toString();
    }
    else
    {
        document.getElementById('hor').innerHTML = hours;
    }

}




function dayy() {

    let date1 = new Date();
    cDay = date1.getDate();
    cMon = date1.getMonth();
    cYer = date1.getFullYear();

    if (cDay < 10)
    {
        document.getElementById('day').innerHTML = "0" + cDay.toString();
    }
    else
    {
        document.getElementById('day').innerHTML = cDay;    
    }
    if (cMon < 10)
    {
        document.getElementById('month').innerHTML = "0" + (cMon+1).toString();    
    }
    else
    {
        document.getElementById('month').innerHTML = cMon+1;
    }
    document.getElementById('year').innerHTML = cYer;

}


// count down //

let interval = window.setInterval(main , 1000);
let yearDate;
let febDate;
let cMonth;
let leftDays;
let curLeft;
let curDate;

function main() {

    let obDate = new Date();
    if (obDate.getFullYear / 4 ==0)
    {
        //366
        yearDate = 366;
        febDate = 29;

    }

    else
    {
        //365
        yearDate = 365;
        febDate = 28;
    }

    // create left days considering full month
    cMonth = obDate.getMonth();//month count from 0 to 11
    curDate = obDate.getDate();
    switch(cMonth)
    {
        case 0:
            //jan
            leftDays = yearDate;
            break;
        case 1:
            //feb
            leftDays = yearDate-31;
            break;
        case 2:
            //march
            leftDays = yearDate-31-febDate;
            break;
        case 3:
            //april
            leftDays = yearDate-31-febDate-31;
            break;
        case 4:
            //may
            leftDays = yearDate-31-febDate-31-30;
            break;
        case 5:
            //june
            leftDays = yearDate-31-febDate-31-30-31;
            break;
        case 6:
            //july
            leftDays = yearDate-31-febDate-31-30-31-30;
            break;
        case 7:
            //aug
            leftDays = yearDate-31-febDate-31-30-31-30-31;
            break;
        case 8:
            //sep
            leftDays = yearDate-31-febDate-31-30-31-30-31-31;
            break;
        case 9:
            //oct
            leftDays = yearDate-31-febDate-31-30-31-30-31-31-30;
            break;
        case 10:
            //nov
            leftDays = yearDate-31-febDate-31-30-31-30-31-31-30-31;
            break;
        case 11:
            //des
            leftDays = yearDate-31-febDate-31-30-31-30-31-31-30-31-30;
            break;
        
        

    }

    curLeft = leftDays - curDate;

    if ((60 - obDate.getSeconds()) < 10)
    {
        document.getElementById("secondsC").innerHTML = "0" + (60 - obDate.getSeconds()).toString();    
    }
    else
    {
        document.getElementById("secondsC").innerHTML = 60 - obDate.getSeconds();
    }
    
    if ((60 - (obDate.getMinutes()+1)) < 10)
    {
        document.getElementById("minutesC").innerHTML = "0" + (60 - (obDate.getMinutes()+1)).toString();
    }
    else
    {
        document.getElementById("minutesC").innerHTML = 60 - (obDate.getMinutes()+1);    
    }

    if ((24 - (obDate.getHours()+1)) < 10)
    {
        document.getElementById("hoursC").innerHTML = "0" + (24 - (obDate.getHours()+1)).toString();
    }
    else
    {
        document.getElementById("hoursC").innerHTML = 24 - (obDate.getHours()+1);    
    }

    if ((curLeft-1) < 10)
    {
        document.getElementById("daysC").innerHTML = "0" + (curLeft-1).toString();
    }
    else
    {
        document.getElementById("daysC").innerHTML = curLeft-1;    
    }

}