var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start()
{
    timer = true;
    stopwatch();
}
function stop()
{
    timer = false
}
function reset()
{
    timer = false

    hr = 0;
    sec = 0;
    min = 0
    count = 0;

    document.querySelector('#hour').innerHTML = '00';
    document.querySelector('#min').innerHTML = '00';
    document.querySelector('#sec').innerHTML = '00';
    document.querySelector('#count').innerHTML = '00';
}
function stopwatch()
{
    if(timer == true)
    {
        count = count+1;

        if(count == 100)
        {
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60)
        {
            min = min +1;
            sec = 0;
        }
        if(min == 60)
        {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var strhr = hr;
        var strmin = min;
        var strsec = sec;
        var strcount = count;

        if(hr<10)
        {
            strhr = '0' + strhr;
        }
        
        if(min<10)
        {
            strmin = '0' + strmin;
        }
        
        if(sec<10)
        {
            strsec = '0' + strsec;
            document.querySelector('#sec').style.color = 'black';
        }
        else
        {
            document.querySelector('#sec').style.color = 'white';
        }
        
        if(count<10)
        {
            strcount = '0' + strcount;
        }

        document.querySelector('#hour').innerHTML = strhr;
        document.querySelector('#min').innerHTML = strmin;
        document.querySelector('#sec').innerHTML = strsec;
        document.querySelector('#count').innerHTML = strcount;
        
        setTimeout(stopwatch, 10);
    }
}