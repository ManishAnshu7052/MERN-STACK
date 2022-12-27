function circleValue(red){
    return `Perimeter:${2*Math.PI*red}, Area:${Math.PI*red*red}`;
}
const ans = circleValue(10);
console.log(ans);