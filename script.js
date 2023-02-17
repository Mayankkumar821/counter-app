var a=0;

function add()
{
    
    a=a+1;
    a=a<0 ? 0:a;
    document.getElementById('heading').innerText=a;
}
function dec()
{a=a-1;
    a=a<0 ? 0:a;
    document.getElementById('heading').innerText=a;
    }
    function reset()
    {
a=0;

document.getElementById('heading').innerText=a;
    }