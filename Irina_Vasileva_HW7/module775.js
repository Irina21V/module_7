//7.7.5
function numbers(arr) {
    let uniqueNumbers = [...new Set(arr)];
    
    uniqueNumbers.sort(function(a, b) {
        return a - b;
    });
    
    return uniqueNumbers;
}