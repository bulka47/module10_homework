let x = 1;
let type;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    type = "x - число";
    break;
  case "string":
    type = "x - строка";
    break;
  case "boolean":
    type = "x - логическое";
    break;
  default:
    type = "Тип x не определен";
}
console.log(type);