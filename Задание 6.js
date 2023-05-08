function checkArrayType(arr) {
    let arr1 = arr.map(e=>typeof e);
    return [...new Set(arr1)].length === 1;
  }
  
  function checkArrayType1(arr) {
    return arr.every((a,i,b) => typeof a === typeof b[0]);  
  }
  
  
  console.log(checkArrayType1([8,1,5,9,12]));