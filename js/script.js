let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"');
const clock = document.querySelector('#clock')
const daysSpan = document.querySelector('.days')
const hoursSpan = document.querySelector('.hours')
const minuteSpan = document.querySelector('.minutes')
const secondsSpan = document.querySelector('.second')

endDate.addEventListener('change',function(e){
    e.preventDefault();
    clearInterval(timeInterval)
    console.dir(this);
    const endDateTemp = new Date(this.value);
    startClock(endDateTemp);
})

function startClock(endTime)
{
    function updateCounter()
    {
        let t = timeRemaining(endTime);

        daysSpan.innerHTML=t.days;
        hoursSpan.innerHTML=t.hours;
        minuteSpan.innerHTML=t.minutes;
        secondsSpan.innerHTML=t.seconds;
        if(t.total <=0)
        {
            clearInterval(timeInterval);
        }
    }
    updateCounter();
    timeInterval = setInterval(updateCounter, 1000);
}

function timeRemaining(endDate)
{
    let t = Date.parse(endDate) - Date.parse(new Date());
    let seconds = Math.floor((t/1000)%60);
    let minutes = Math.floor((t/1000/60)%60);
    let hours = Math.floor((t/(1000*60*60)%24));
    let days = Math.floor(t/(1000*60*60*24));
return{
    'total':t,
    'days':days,
    'hours':hours,
    'minutes':minutes,
    'seconds': seconds
}
}


// console.log(endDate);