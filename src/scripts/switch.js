const SOUND_ON = "Sound On";
const SOUND_OFF = "Sound Off";

export function switchButton() {
    const $btn = document.querySelector('.btn');
    const $audio = document.querySelector('.audio');

    $btn.addEventListener("click", function toogleState() {
            const currentValue = $btn.value;
        if (currentValue === SOUND_ON) {
            $btn.value = SOUND_OFF;
            $audio.play();
        } else {
            $btn.value = SOUND_ON;
            $audio.pause();
        }
    });
}