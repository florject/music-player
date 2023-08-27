const songElement = document.getElementById("songElement");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");
const volumeSlider = document.getElementById("volumeSlider");

const durationSlider = document.getElementById("durationSlider");

const skipPlusBtn = document.getElementById("skipPlusBtn");
const skipMinusBtn = document.getElementById("skipMinusBtn");

const currentPlayingTime = document.getElementById("currentPlayingTime");
const volumePercentage = document.getElementById("volumePercentage");


// window.onload = () =>
// {
//     durationSlider.max = songElement.duration;
// }

durationSlider.onchange = (event) =>
{
    const sliderDuration = event.target.value;
    songElement.currentTime = sliderDuration;
}

// volumeSlider.onchange = (event) =>
// {
//     const sliderVolumePercentage = event.target.value;
//     songElement.volume = sliderVolumePercentage/100;
//     volumePercentage.innerText = `${sliderVolumePercentage} %`;
// }



playBtn.onclick = () =>
{
    songElement.play();
}

pauseBtn.onclick = () =>
{
    songElement.pause();
}

skipPlusBtn.onclick = () =>
{
    const currentSecond = parseInt(songElement.currentTime);
    const totalSecond = parseInt(songElement.duration);

    if(currentSecond<totalSecond)
    {
        songElement.currentTime = currentSecond + 5; 
    }
}

skipMinusBtn.onclick = () =>
{
    const second = parseInt(songElement.currentTime);
    if(second>0)
    {
        songElement.currentTime = second - 1;   
    } 
}

volumeUpBtn.onclick = () =>
{
    let realVolumePercentage = parseInt(songElement.volume * 100);
    const modifiedVolumePercentage = realVolumePercentage + 5;
    if(modifiedVolumePercentage<100)
    {
        songElement.volume = ((modifiedVolumePercentage)/100);
    }
    volumePercentage.innerText = `${modifiedVolumePercentage} %`;
}

volumeDownBtn.onclick = () =>
{
    let realVolumePercentage = parseInt(songElement.volume * 100);
    const modifiedVolumePercentage = realVolumePercentage -5;
    if(modifiedVolumePercentage>=5)
    {
        songElement.volume = ((modifiedVolumePercentage)/100);
    }    
    volumePercentage.innerText = `${modifiedVolumePercentage} %`;
}


songElement.addEventListener("timeupdate",()=>
{
    const second = parseInt(songElement.currentTime);

    const displayMinute = parseInt(second / 60);
    const displaySecond  = parseInt(second % 60);


    currentPlayingTime.innerText = ` ${displayMinute} min : ${displaySecond} sec `;
    durationSlider.value = songElement.currentTime;
})

