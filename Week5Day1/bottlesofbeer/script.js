let num = 1;
let bottles = Number(prompt("How many bottles of beer?"));
do {
  if (bottles - num < 0) {
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer `);

    console.log(`take ${bottles} down pass them around`);
    console.log(`0 bottles of beer on the wall`);
    break;
  }

  console.log(`${bottles} bottles of beer on the wall`);
  console.log(`${bottles} bottles of beer `);

  bottles -= num;

  console.log(`take ${num} down pass them around`);
  console.log(`${bottles} of beer on the wall`);
  num += 1;
} while (bottles > 0);
