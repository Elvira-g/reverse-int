module.exports = function reverse (n) {
    let nString = String(n);
    let nArr = [];
    
    for( i = 0; i < nString.length; i++){
        if(nString[0] === '-'){
            nString = nString.slice(1);
        }
        nArr.push(nString[i]);
    }
    return Number(nArr.reverse().join(''));
}
