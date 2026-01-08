// Maximum Number
const heights = [5, 1, 9, 3];

function getMax(numbers){
    let max = numbers[0] ;
    for(const num of numbers){
        
       if(num > max){
           max= num
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max);