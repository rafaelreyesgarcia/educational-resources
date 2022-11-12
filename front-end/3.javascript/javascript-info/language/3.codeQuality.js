// avoiding nesting levels
// normal nested
function pow1 (x, n) {
    if (n < 0) {
        console.log('negative n not supported')
    } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
}

console.log(pow1(2, 4));

function pow2(x, n) {
    if (n < 0) {
        console.log('negative n not supported');
        return;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow2(2, 4));

// transpiler
let height;
height = (height !== undefined && height !==null) ? height : 100;
console.log(height);
// modern syntax
// height = height ?? 100;

