let lasttime = 0;

window.addEventListener("scroll", () => {
    const curr = Date.now();

    if (curr - lasttime >= 5000) {
        console.log("Scroll event execute krdo..");

        lasttime = curr;
    }
});

// Throttling is a technique that limits a function to execute 
// at most once within a specified time interval.