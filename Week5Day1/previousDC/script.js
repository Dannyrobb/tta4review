let bottles = 99;
let incrementor = 1;
do {
  if (bottles - incrementor < 0) {
    console.log(`${bottles} bottles  on the wall.`);
    bottles;

    console.log(`take ${bottles} down pass it around 0 bottles on the wall`);
    break;
  }
  console.log(`${bottles} bottles  on the wall.`);
  bottles -= incrementor;

  console.log(`take ${incrementor} down pass it around ${bottles} bottles on the wall`);
  incrementor += 1;
} while (bottles > 0);
