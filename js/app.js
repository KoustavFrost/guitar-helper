let showCombo = document.getElementById('show_combo_btn');
let setIntervalCheckBox = document.getElementById('set_interval');
let initCombi;

showCombo.addEventListener('click', () => {
    showCombinations();
    if (setIntervalCheckBox.checked) {
        let interval = document.getElementById('interval');
        initCombi = setInterval(() => {
            showCombinations();
        }, (interval.value) * 1000);

    } else {
        showCombinations();
    }
});

setIntervalCheckBox.addEventListener('click', () => {
    let intervalSection = document.getElementById('interval_section');
    let stopBtn = document.getElementById('stop_combo');
    if (setIntervalCheckBox.checked) {
        intervalSection.style.display = 'block';
        stopBtn.style.display = 'block';
    } else {
        intervalSection.style.display = 'none';
        stopBtn.style.display = 'none';
    }
})

const showCombinations = () => {
    let fretNo = document.getElementById('frets_no').value;
    let stringNo = document.getElementById('strings_no').value;

    let fret = getRandom(fretNo);
    let string = getRandom(stringNo);

    document.getElementById('combo').innerHTML = fret + " , " + string;
}

const getRandom = (limit) => {
    return (Math.ceil(Math.random() * limit));
}