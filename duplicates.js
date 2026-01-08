//Remove Duplicates
const nums = [ 1, 2, 2, 3, 4, 4];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
       if(unique.includes(item) === false){
        unique.push(item);
       }

  }
    return unique;
}
const uniqueArray = noDuplicate(nums);
console.log(uniqueArray);