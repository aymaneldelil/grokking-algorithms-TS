function binarySearch(arrayList:[], item: number): number | string {
  let low: number = 0;
  let high: number = arrayList.length - 1;

  while (low <= high) {
    let middleNumOfList: number = Math.floor((low + high) / 2);
    let guess: number = arrayList[middleNumOfList];
    if (guess === item) {
      return middleNumOfList;
    }
    if (guess > item) {
      high = middleNumOfList - 1;
    } else {
      low = middleNumOfList + 1;
    }
  }

  return " Your Number Not Found";
}

// / Create Array From 0 to n //////

const arrayLong:number= 100000000
let arrList :number[] = [...Array(arrayLong).keys()];
console.log(typeof arrList);


let beforeCalling:number = performance.now()
console.log(binarySearch(arrList, 8)); 
let afterCalling:number = performance.now()

console.log(`Time Elapsed: ${(afterCalling - beforeCalling) / 1000} seconds.`)

