/* clock shtuff */
setInterval(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = document.querySelector('.date-string');
    const timeStr = document.querySelector('.time-string');
    const date = new Date()
    dateStr.innerText = date.toLocaleDateString("en-US",options);
    timeStr.innerText = date.toLocaleTimeString("en-GB");
}, 500)

function  livelyPropertyListener(name, value) {
    const imageBackground = document.querySelector('#imageBackground');
    const videoBackground = document.querySelector('#videoBackground');
    switch (name) {
        case 'bgType':
            imageBackground.style.display = 'none'
            videoBackground.style.display = 'none'
            if (value == 0) {
                imageBackground.style.display = 'inherit'
            }
            else if (value == 1) {
                videoBackground.style.display = 'inherit'
            }
            break;
        case 'videoSelect':
            console.log(value)
            videoBackground.src = value
            break;
        case 'imageSelect':
            imageBackground.src = value
            break;
        case 'backgroundColor':
            document.documentElement.style.setProperty('--background-color', value);
            break;


    }
}

/* handle music box shtuff */
function livelyCurrentTrack(data) {
    let trackInfo = JSON.parse(data)

    const musicInfo = document.querySelector('.music-info');

    if (trackInfo == null)
        musicInfo.style.display = 'none'
    else
        musicInfo.style.display = 'block'

    const albumArt = document.querySelector('.album-art')
    if (trackInfo.Thumbnail != null) {
        albumArt.src = "data:image/png;base64, " + trackInfo.Thumbnail;
        albumArt.style.display = "block"
    }
    else
        albumArt.style.display = "none"

    const titleInfo = document.querySelector('.title-info')
    if (trackInfo.Title != null) {
        titleInfo.innerText = trackInfo.Title;
        titleInfo.style.display = "inline-block"
    }
    else
            titleInfo.style.display = "none"
        
    const artistInfo = document.querySelector('.artist-info')
    if (trackInfo.Title != null) {
        artistInfo.innerText = trackInfo.Artist;
        artistInfo.style.display = "block"
    }
    else
        artistInfo.style.display = "none"
}