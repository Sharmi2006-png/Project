const pages = document.querySelectorAll(".page");

const openingSong = document.getElementById("openingSong");

const song1 = document.getElementById("song1");

const song2 = document.getElementById("song2");

const song3 = document.getElementById("song3");

/* PLAY OPENING SONG ONLY */

openingSong.play();

/* STOP ALL SONGS */

function stopSongs(){

    openingSong.pause();
    song1.pause();
    song2.pause();
    song3.pause();

    openingSong.currentTime = 0;
    song1.currentTime = 0;
    song2.currentTime = 0;
    song3.currentTime = 0;
}

/* PAGE CHANGE */

function nextPage(pageNumber){

    /* STOP PREVIOUS SONG */

    stopSongs();

    /* HIDE ALL PAGES */

    pages.forEach(page => {

        page.classList.remove("active");

    });

    /* SHOW CURRENT PAGE */

    document
    .getElementById("page" + pageNumber)
    .classList
    .add("active");

    /* PLAY PAGE SONG */

    if(pageNumber == 2){

        song1.play();
    }

    else if(pageNumber == 3){

        song2.play();
    }

    else if(pageNumber == 4){

        song3.play();
    }
}