function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 200) + 1);
    }
    return array;
  }
  
  function sortArray(array) {
    return array.sort((a, b) => a - b);
  }
  
  const randomArray = generateRandomArray(20);
  console.log('Несортований масив:', randomArray);
  const sortedArray = sortArray(randomArray);
  console.log('Сортований масив:', sortedArray);