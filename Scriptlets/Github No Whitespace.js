javascript:
/***************************************************************************
// Author: Sam Lombardo, http://github.com/AweSamNet
// 
// Note: To set up this scriptlet, see setup instruction at 
// https://github.com/AweSamNet/General/tree/master/Scriptlets
// 
// Usage:
// 1.   Navigate to a commit, pull request, or diff page on github that has too much whitespace tracking 
// 2.   Run this scriptlet (if you created a bookmark for it, click it)
/**************************************************************************/

var prefix = window.location.search ? "&" : "?";
window.location = window.location + prefix + "w=1";

void(0);
