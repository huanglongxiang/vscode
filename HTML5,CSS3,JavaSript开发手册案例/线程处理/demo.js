var i = 0;
function CountNum() {
    i = i+1;
    postMessage();
    setTimeout('CountNum()',500);
}
CountNum()