function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      return true;
    }
  } 
} return false;
}


/* 
  Write the Big O time complexity of your function here
   Big O Space Complexity: O(n)
   Big O Time Complexity: O(n^2)
/* 

/*
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 5, and the target is 26, the complementary number is 21)
  iterate over the remaining numbers in the array
  check if any of the remaining numbers is the complement
  if so, return true
  if we reach the end of the array after the iterations, return false
*/

/*
  Add written explanation of your solution here
  I need to make a hasTargetSum function that checks if two numbers in an array n\
  add up to some target number. For example, if the array is [10,20,35,69] n\
  and the target number is 89, I know that 20 and 69 add up to 89, n\
  so I should return true. If I have the same array and the target is 63, n\
  no two numbers in the array add up to 63, so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
