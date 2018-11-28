
const sayHello = () => {
  return "Hello";
};

const area = (w, h) => {
  return w * h;
};

const circleArea = r => {
  return Math.PI * r * r;
};

const perimeter = (w, h) => {
  return w + w + h + h;
};



module.exports = { sayHello, area, perimeter, circleArea };
