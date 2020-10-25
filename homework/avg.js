/**
 * 
 * @param {number[]} args
*/
function mean(a,b,c){
    return (a+b+c)/3;
}
const mean2 = (...args) => {
    const sum = args.reduce((pre,cur) => pre +cur)
    return sum / args.length
}

const mean3 = (...args) => {
    const evens = args.filter(i => i%2 ===0)
    return mean2(...evens)
}
