var cursor = document.querySelector("#circle-cursor");
var cursorRing = document.querySelector("#circle-cursor-ring");
var gElems = document.getElementsByClassName("cursor-hover-element");
document.onmousemove = handleMouseMove;
var isInElement = false;
function handleMouseMove(event) {
  var dot, eventDoc, doc, body, pageX, pageY;
  event = event || window.event;
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX = event.clientX + ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) - ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    event.pageY = event.clientY + ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) - ((doc && doc.clientTop) || (body && body.clientTop) || 0);
  }
  //not my function, https://stackoverflow.com/questions/7790725/javascript-track-mouse-position

  moveCursor(event.pageX, event.pageY);
}
function moveCursor(pX, pY) {
  var diff = 10;
  if (!isInElement) {
    cursor.style.left = pX - diff + "px";
    cursor.style.top = pY - diff + "px";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    cursor.style.borderRadius = "50%";
    cursorRing.style.left = pX - diff + "px";
    cursorRing.style.top = pY - diff + "px";
    cursorRing.style.width = "20px";
    cursorRing.style.height = "20px";
    cursorRing.style.borderRadius = "50%";
  }
}
for (var i = 0; i < gElems.length; i++) {
  var e = gElems[i];
  e.addEventListener("mouseenter", enterCursor);
  e.addEventListener("mouseleave", leaveCursor);
}
function enterCursor(event) {
  isInElement = true;
  var elem = event.srcElement;
  var eX = elem.offsetLeft;
  var eY = elem.offsetTop;
  var eW = elem.offsetWidth;
  var eH = elem.offsetHeight;
  var diff = 6;
  cursor.style.left = eX - diff + "px";
  cursor.style.top = eY - diff + "px";
  cursor.style.width = eW + diff * 2 - 1 + "px";
  cursor.style.height = eH + diff * 2 - 1 + "px";
  cursor.style.borderRadius = "5px";
  cursorRing.style.left = eX - diff + "px";
  cursorRing.style.top = eY - diff + "px";
  cursorRing.style.width = eW + diff * 2 - 1 + "px";
  cursorRing.style.height = eH + diff * 2 - 1 + "px";
  cursorRing.style.borderRadius = "5px";
}
function leaveCursor(event) {
  isInElement = false;
}
