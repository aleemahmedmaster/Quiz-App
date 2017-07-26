var getitem=localStorage.getItem('marks');
// console.log(getitem);
// document.write(getitem);
var doc=document.getElementById('marks');
// console.log(doc)
doc.innerHTML=getitem;
var userinfo=localStorage.getItem('userdata');
 var data=JSON.parse(userinfo);
console.log(data);
// var arr=[];
// console.log(JSON.parse(userinfo));
for(var i=0;i<3;i++)
{
      var user=document.getElementsByClassName('main');
    //   arr.push(user);
}
console.log(user);
// console.log(arr[0].innerHTML);
for(var i=0; i<3;i++)
{
    user[i].innerHTML=data[i];
}
var hide=document.getElementsByClassName('result')
console.log(hide);
// for(var i=0;i<hide.length;i++)
{
    if(getitem<=30)
    {
        hide[0].style.display='none';
    }
    else
    {
        hide[1].style.display='none';
    }
    
}
