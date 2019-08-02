$(document).ready(function() {
    $(".side-nav__link").on("click", (event) => {
        let currentId = $(event.currentTarget).attr('id');
        let targetId = currentId.split("-")[1];
        console.log(targetId);

        $(event.currentTarget).parent().addClass("side-nav__item--active");
        $(event.currentTarget).parent().siblings().removeClass("side-nav__item--active");
        $(`#${targetId}`).removeClass("hidden");
        $(`#${targetId}`).siblings().addClass("hidden");
    })

    fetch("https://jdproxy.herokuapp.com/spotify/lastplayed", {
        method: 'GET',
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let currentTrack = data[0];
        let artist = currentTrack.artist['#text'];
        let nowPlaying = currentTrack['@attr'].nowplaying;
        let songName = currentTrack.name;
        let albumUrl = currentTrack.image[2]['#text'];

        $("#scrobbleTrack").text(`${songName} by ${artist}`)
        $("#scrobbleAlbum").attr("src", `${albumUrl}`)
        
        if (nowPlaying = true) {
            $("#nowPlaying").text("I'm currently listening to:")
            $("#scrobbleIcon").addClass("scrobble__icon--nowplaying")
        } else {
            $("#nowPlaying").text("I recently listened to:")
        }

    })


    
})