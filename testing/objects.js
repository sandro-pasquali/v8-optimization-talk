//	node --allow-natives-syntax objects.js 

var fast = {
	a : 1,
	b : 2
}

var slow = {
	a : 1,
	b : 2
}
delete slow.b;

console.log(%HasFastProperties(fast));
console.log(%HasFastProperties(slow));