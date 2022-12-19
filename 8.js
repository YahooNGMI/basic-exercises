
// 8. Declare a function that takes in a single argument, a name, and then says hi to that name via the console, 
// UNLESS that name is one of the leaver's names: tums, piccle, or interesting, 
// in which case it instead tells that user to fuck off via the console.
function greetings(name) {
    if (name === "tums" || name === "piccle" || name == "interesting") {
        console.log("FUCK OFF", name, "!");
    } else {
        console.log('Hi', name);
    }
}

greetings("Yahuu");
greetings("tums");
greetings("piccle");
greetings("interesting");