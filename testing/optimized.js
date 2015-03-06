//	node --allow-natives-syntax --trace-opt --trace-deopt optimized.js 

function square(operand) {
    return operand * operand;
}

//	Make first pass to gather type information
square(3);

//	Ask that the next call of #square trigger an optimization attempt
%OptimizeFunctionOnNextCall(square);

//	Call again...
square(3);

//	Call a few more times...
/*
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
square(3);
*/


console.log(%GetOptimizationStatus(square));



/*

1: Function is optimized
2: Function is not optimized
3: Function is always optimized
4: Function is never optimized
6: Function is maybe deoptimized

*/