let quotes=[
    {id:0,author:"Oscar Wilde",quote: "Be yourself"},
    {id:1,author:"Marilyn Monroe",quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."}
];

function getRandomQuote(quotes){
    const random=Math.floor(Math.random() * quotes.length );
    return quotes[random]
    
}
console.log(getRandomQuote(quotes))