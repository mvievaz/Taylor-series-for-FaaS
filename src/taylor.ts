function calculateExponential(x: number, n: number): number {
    let result = 1;
    let term = 1;

    for (let i = 1; i <= n; i++) {
        term *= x / i;
        result += term;
    }

    return result;
}

const args = process.argv.slice(2);
const x = parseFloat(args[0]) || 0;
const n = parseInt(args[1]) || 10;

// Check if valid arguments were provided
if (isNaN(x) || isNaN(n) || x < 1 || n < 1) {
    console.log("Please provide valid values for x and n from the command line.");
} else {
    const result = calculateExponential(x, n);
    console.log(`e^${x} (approximated with ${n} terms) = ${result}`);
}