function filter(cb) {
    console.log(this)
    for (let i = 0; i < this.lenght; i++){
        if (cb (this[i], i, arr)) {
            newArr.push(this[i]);
        }
    }
    return newArr
}
Array.prototype.newFilter = filter;
const arrr = [1, 2, 3, 4, 5,]
console.log(arrr.newFilter((e)))
