var r1=0, r2=0, r3=0, r4=0, r5=0;
var text="";
var OCINKA=0;
function CountRez() {
var count=0;
count=((r1+r2+r3+r4+r5)*5)/5;
OCINKA=count;
var text="Ви не відповіли на жодне запитання !";
if (count===5) text="Ви відповіли на оцінку: BIДMIHHО !";
if (count===4) text="Ви відповіли на оцінку: ДОБРЕ !";
if ((count>=2)&&(count<=3)) text="Ви відповіли на оцінку: ЗАДОВІЛЬНО !";
if (count<2) text="Ви відповіли на оцінку : НЕЗАДОВІЛЬНО! Наступного разу підготуйтесь краще!";
var myWin= open("", "displayWindow", "width=500,height=200,scrollbars=yes,menubar=yes");
myWin.document.open();
myWin.document.write("<html><head><title>Peзyльтат тecтa");
myWin.document.write("</title></head><body>");
myWin.document.write("<center><small>");
myWin.document.write(OCINKA);
myWin.document.write("<br>_____________________<br>");
myWin.document.write(text);
myWin.document.write("</small></center>");
myWin.document.write("</body></html>");
myWin.document.close();
    }