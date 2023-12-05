//1
let sentance = "The movie is not that bad, I like it";

//2
let wordnot = sentance.search("not");

console.log(wordnot);

//3
let wordbad = sentance.search("bad");
console.log(wordbad);

//4//5
if (wordbad > wordnot) {
  let result = sentance.replace("not that bad", "good");
  console.log(result);
} else if (wordbad < wordnot) {
  console.log(sentance);
}
