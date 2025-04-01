//Part 1: Stack Overflow
let counter = 0;

function incrementCounter()
{
    counter++;
    console.log(counter);
    incrementCounter();
}
try
{
    incrementCounter();
}
catch(error)
{
    console.error(error);
    console.error("Counter value at the time of error:", counter);
    
}