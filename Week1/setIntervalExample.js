// creating a stop watch
let counter = 1;
function printIntervals(){
    console.clear()
    console.log(counter)
    counter++;
}
// after 1 sec we need to call printIntervals
setInterval(printIntervals, 1000)
