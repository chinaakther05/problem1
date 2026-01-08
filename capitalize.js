// Capitalize First Letter
 
const str = "hello world";

const result = str
  .split(" ") 
  .map(w => w[0].toUpperCase() + w.slice(1)) 
  .join(" "); 

console.log(result);