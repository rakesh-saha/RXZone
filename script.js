//window.onload = function () {
    const hamburger = document.querySelector(".hamburger");
    const item = document.querySelector(".item");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        item.classList.toggle("active");
    })

    var texts = [
        "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime – ' David Leinweber '",
        "Don’t comment bad code – rewrite it – ' Brian Kernighan '",
        "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first – ' Andy Hunt '",
        "A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen – ' Paul Graham '",
        "Bad programmers worry about the code. Good programmers worry about data structures and their relationships – ' Linus Torvalds '",
        "Debugging becomes significantly easier if you first admit that you are the problem – ' William Laeder '",
        "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive – ' Steve McConnell '",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand – ' Martin Fowler '",
        "One of my most productive days was throwing away 1000 lines of code – ' Ken Thompson '",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it – ' Rajanand '",
        "Everyday life is like programming, I guess. If you love something, you can put beauty into it – ' Donald Knuth '",
        "Everybody in this country should learn to program a computer because it teaches you how to think – ' Steve Jobs '",
        "System programmers are the high priests of a low cult – ' Robert S. Barton '",
        "A good programmer is someone who always looks both ways before crossing a one-way street – ' Doug Linder '",
        "I don’t care if it works on your machine! We are not shipping your machine – ' Vidiu Platon '",
        "Fix the cause, not the symptom – ' Steve Maguire '",
        "Measuring programming progress by lines of code is like measuring aircraft building progress by weight – ' Bill Gates '",
        "In programming, the hard part isn’t solving problems but deciding what problems to solve – ' Paul Graham '",
        "If debudding is the process of removing software bugs, then programming must be the process of putting them in – 'Edsger W. Dijkstra '",
        "First, solve the problem. Then write the code – ' John Johnson '",
        "The computer was born to solve problems that did not exist before – ' Bill Gates '",
    ];

    document.getElementById('randomText').innerText = texts[Math.floor(Math.random() * texts.length)];

//}
