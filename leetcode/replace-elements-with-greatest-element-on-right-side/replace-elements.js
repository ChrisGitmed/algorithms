const replaceElements = function(arr) {
    const returnedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            returnedArr.push(-1);
            break;
        }
        const copiedArray = arr.slice(i + 1);
        //returnedArr.push(Math.max.apply(null, copiedArray));
        returnedArr.push(copiedArray.reduce( (accum, item) => Math.max(accum, item)))
        
    }
    return returnedArr;
};

module.exports = replaceElements;