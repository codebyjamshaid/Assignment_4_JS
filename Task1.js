function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        let num = document.getElementById('num' + i).value;
        sum += parseInt(num);
    }
    document.getElementById('result').innerText = 'Sum: ' + sum;
}