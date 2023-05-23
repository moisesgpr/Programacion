function hasDuplicates(array){

let newArr = array.filter(element => {
    return array.lastIndexOf(element) == array.indexOf(element)
});

return newArr.length < array.length

}

let arr1 = [1,2,3,4,4,4];
let arr2 = [1,2,3,4,5,6];
let arr3 = [1,1,2,2,3,3];

console.log(hasDuplicates(arr1))