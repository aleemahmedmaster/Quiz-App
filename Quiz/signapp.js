function sign()
{
    var x=document.getElementById("input1").value;
    var x1=document.getElementById("input2").value;
    var x2=document.getElementById("input3").value;
    var x3=document.getElementById("input4").value;
    var array=[];
    array.push(x);
    array.push(x1);
    array.push(x2);
    array.push(x3);
    if(x==='' || x1===''||x2===''||x3==='')
    {
        alert('plz fill the form first')
    }
    else
    {
        localStorage.setItem('userdata',JSON.stringify(array));
        var win=window.location.href='index.html';
        console.log(win);
    }
}