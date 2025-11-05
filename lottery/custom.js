function getRandom(x) {
    // 回傳 1 ~ x 的隨機數
    return Math.floor(Math.random() * x + 1);
}

function getPowerNum() {
    let arr = [];
    // 總共要6個數字
    for (let i = 1; i <= 6; i++) {
        let num = getRandom(38);

        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            arr.push(num);
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}
let arr = getPowerNum();
let num1 = arr.join(', ');
let num2 = getRandom(8);
console.log(`第一區號碼 ${num1}，第二區號碼 ${num2}`);