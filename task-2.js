function counter() {
    let total = 0;
    function increment() {
        total += 1;
        this.total += 1;
    }
    function decrement() {
        total -= 1;
        this.total -= 1;
    }
    return {
        increment,
        decrement,
        show() {
            return total;

        },
        showThis(){
            console.log(this);
        }
    }
}
const count1 = counter();
const count2 = counter();

count1.increment();
count2.decrement();

function bar(cbAct, cbShow) {
    cbAct.call(count1);
    console.log(cbShow.call(count1));
}
bar(count1.increment.bind(count1), count2.increment);
count1.showThis

const cbAct1 = count1.increment.bind(count1);
const cbShow1 = count2.show.bind(count1);
bar(cbAct1, cbShow1);
console.log(bar)