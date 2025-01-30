function getThirdElement(arr: number[]| string[]): any {
    if(arr.length<3){
        console.error('array has fewer than three elements.')
        return;
    }
  return arr[2];
}

const numbers = [1, 2, 3, 4];
const words = ["apple", "banana", "cherry", "date"];
const num2 = [1,2]
console.log(getThirdElement(numbers)); 
console.log(getThirdElement(words));  
console.log(getThirdElement(num2));   


