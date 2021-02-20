'use strict'
function foo() {
    let total = 0;
    function add(n) {
        total += n
        console.log(this)
        ruturn(this)
    }
    function result() {
        return total;
    }
    return {
        add,
        result,
    };
}
const prev = foo();
const next = foo();
prev.add(1).add(2).result()
console.log(prev.add(1).add(2))


