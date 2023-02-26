function pluck(array, property) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      result.push(array[i][property]);
    }
  
    return  result ; 
  }
 
    // const pluck = (array, property) => {
    //     return array.map(item => item[property]);
    // };
    const people = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Jim', age: 35 },
    ];
    
    console.log(pluck(people, 'name')); // Output: ['John', 'Jane', 'Jim']