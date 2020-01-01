// Loading the service worker files
window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('../sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}

let showCombo = document.getElementById('show_combo_btn');
let setIntervalCheckBox = document.getElementById('set_interval');
let initCombi;

showCombo.addEventListener('click', () => {
    showCombinations();
    if (setIntervalCheckBox.checked) {
        let interval = document.getElementById('interval');
        $('#stop_combo').show();
        initCombi = setInterval(() => {
            showCombinations();
        }, (interval.value) * 1000);

    } else {
        showCombinations();
    }
});

setIntervalCheckBox.addEventListener('click', () => {
    let intervalSection = document.getElementById('interval_section');
    if (setIntervalCheckBox.checked) {
        intervalSection.style.display = 'block';
    } else {
        intervalSection.style.display = 'none';
    }
})

const showCombinations = () => {
    let fretNo = document.getElementById('frets_no').value;
    let stringNo = document.getElementById('strings_no').value;

    let fret = getRandom(fretNo);
    let string = getRandom(stringNo);

    document.getElementById('combo').value = fret + " , " + string;
}

const getRandom = (limit) => {
    return (Math.ceil(Math.random() * limit));
}