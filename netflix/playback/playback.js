let speedRangeConfig = {
    min: 0,
    max: 4,
    step: 0.1,
};

const onSpeedChange = (event) => {
    let value = event.target.value;

    document.getElementsByTagName("video")[0].playbackRate = value;
    setPlaybackRateText(value);
};

const setPlaybackRateText = (playbackRate) => {
    if (playbackRate.toString().length < 2) {
        playbackRate = playbackRate + ".0";
    }
    $(".playback-speed-text").text(playbackRate + "x");
};

onCreate(".popup-content", (element) => {
    let rangeInput = document.createElement("input");
    let text = $.parseHTML('<p class="playback-speed-text"></p>')[0];
    let playbackRate = document.getElementsByTagName("video")[0].playbackRate;

    rangeInput.type = "range";
    rangeInput.min = speedRangeConfig.min;
    rangeInput.max = speedRangeConfig.max;
    rangeInput.step = speedRangeConfig.step;
    rangeInput.value = playbackRate;
    rangeInput.addEventListener("change", onSpeedChange);

    element.lastElementChild.replaceWith(rangeInput);
    element.appendChild(text);
    setPlaybackRateText(playbackRate);
});

// padding-top: 5rem;
// cursor: pointer;
// padding-top: 3rem; */
// position: relative;
// width: 9.1rem; */
// margin-left: auto;
// margin-right: 2.5rem;

// line 0.07rem solid rgb(151, 151, 151);
