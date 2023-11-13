function calculateVME() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);

    var vme = value1 * value2;

    document.getElementById('vmeResult').innerHTML = 'VME: ' + vme.toFixed(0);

    var vmeResult = document.getElementById('vmeResult');

    // Remove todas as classes existentes do elemento vmeResult
    vmeResult.classList.remove('red', 'yellow', 'green');

    if (vme > 25) {
        vmeResult.classList.add('red');
    } else if (vme >= 9 && vme <= 20) {
        vmeResult.classList.add('yellow');
    } else {
        vmeResult.classList.add('green');
    }
}
