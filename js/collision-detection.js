function getTop(obj) {
  return obj.y;
}
function getBottom(obj) {
  return obj.y + obj.height;
}
function getLeft(obj) {
  return obj.x;
}
function getRight(obj) {
  return obj.x + obj.width;
}

function collision(objA, objB) {
  return (
    getBottom(objA) >= getTop(objB) &&
    getTop(objA) <= getBottom(objB) &&
    getRight(objA) >= getLeft(objB) &&
    getLeft(objA) <= getRight(objB)
  );
}
