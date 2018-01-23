javascript:
/***************************************************************************
// Author: Sam Lombardo, http://github.com/AweSamNet
// 
// Note: To set up this scriptlet, see setup instruction at 
// https://github.com/AweSamNet/General/tree/master/Scriptlets
// 
// Usage:
// 1.   Navigate to a page on github that could use a little more space
// 2.   Run this scriptlet (if you created a bookmark for it, click it)
/**************************************************************************/

var style = "";
var containers = document.getElementsByClassName('container');
for(var i = 0; i < containers.length; i++)
{
    var container = containers[i];
     container.style.width = '1880px';
}

var data= document.getElementsByClassName('data');
for(var i = 0; i < data.length; i++)
{
    var div= data[i];
    div.style.maxHeight = '800px';
    div.style.overflowY = 'auto';
}
void(0);
