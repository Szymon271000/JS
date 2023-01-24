const WHITE_KEYS = ['q','w','e','r'];
const BLACK_KEYS = ['a','s','d'];

const recordButton = document.querySelector('.record-button');
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

const keyMap = [...keys].reduce((map, key) => {
    map[key.dataset.note] = key;
    return map;
}, {})

//keyMap[boom]
// {boom: key[0], clap: key[1]}

let recordingStartTime;
let songNotes;
recordButton.addEventListener('click', toggleRecording);

function toggleRecording() {
    recordButton.classList.toggle('active');
    if (isRecording()) {
        startRecording();
    }
    else {
        stopRecording();
    }
}

function isRecording() {
    return recordButton != null && recordButton.classList.contains('active');
}

function startRecording() {
    recordingStartTime = Date.now();
    songNotes = [];
}

function stopRecording() {
    playSong();
}

function playSong() {
    if (songNotes.length === 0 ) { 
        return;
    }

    songNotes.forEach(note => {
        setTimeout(() => {
            playNote(keyMap[note.key]);
        }, note.startTime)
    });
}

document.addEventListener('keydown', e => {
    if (e.repeat) {
        return;
    }
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote(key) {
    if (isRecording()) {
        recordNote(key.dataset.note);
    }
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currenTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

function recordNote(note) {
    songNotes.push({
        key: note,
        startTime: Date.now() - recordingStartTime
    });
}