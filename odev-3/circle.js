const circleArea = (r) => {
    console.log(Math.PI * Math.pow(r, 2));
    return Math.PI * Math.pow(r, 2);
};

const circleCircumference = (r) => {
    console.log(2 * Math.PI * r);
    return 2 * Math.PI * r;
};
module.exports = { circleArea, circleCircumference };
