(() => {
  // เริ่มเขียนโค้ด
  const audioElem = document.querySelector("#myAudio");
  const playBtnElem = document.querySelector(".play");
  const progressBarElem = document.querySelector(".progress-bar");
  const startTimeElem = document.querySelector(".start-time");
  const endTimeElem = document.querySelector(".end-time");

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = "pause";
    } else {
      audioElem.pause();
      playBtnElem.className = "play";
    }
  }

  function getDuration(time) {
    const minute = Math.floor((time / 60) % 60).toString();
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minute}:${second}`;
  }

  function onTimeUpdate() {
    startTimeElem.innerHTML = getDuration(audioElem.currentTime);
    progressBarElem.value = audioElem.currentTime;
  }

  function onLoadedData() {
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  }

  function onInput() {
    audioElem.currentTime = progressBarElem.value;
  }

  function onEnded() {
    playBtnElem.className = "play";
    audioElem.currentTime = 0;
  }

  function run() {
    playBtnElem.addEventListener("click", onClick);

    audioElem.addEventListener("timeupdate", onTimeUpdate);

    window.onload = function () {
      onLoadedData();
    };
    audioElem.addEventListener("ended", onEnded);

    progressBarElem.addEventListener("input", onInput);
  }

  run();
})();
