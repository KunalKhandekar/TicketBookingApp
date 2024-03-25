const trailer = document.querySelector('.trailer');
const video = document.querySelector('#home-trailer');

function PlayVideo() {
    video.play();
    trailer.classList.add('active');
}

function PauseVideo() {
    video.pause();
    trailer.classList.remove('active');
}

function changeContent(bg, title, year, duration, genre, description) {
    const banner = document.querySelector(".banner");
    const t = document.querySelector(".movie-title");
    const y = document.querySelector(".year");
    const d = document.querySelector(".duration");
    const g = document.querySelector(".genre");
    const desc = document.querySelector(".description");
    banner.style.background = `url(${bg})`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    t.src = title;
    y.innerText = year;
    d.innerText = duration;
    g.innerText = genre;
    desc.innerText = description;
}

const slider = document.querySelector(".carousel").children;
const sliderArr = Array.from(slider);


function fchanger(i, banner, title, year, duration, genre, description) {
    sliderArr[i].addEventListener("click", ()=>{
        changeContent(banner, title, year, duration, genre, description);
    });
};

fchanger(0,
    './banner/Bg1-shaitaan.avif',
    './title/bg1-shaitan.png',
    2024,
    "2h 12m",
    "Supernatural,Thriller", "Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.")


fchanger(1,
    './banner/b2-madgaon-express.avif',
    './title/bg2-madgaon-express.png',
    "2024",
    "2h 25m",
    "Comedy,Drama",
    "Three childhood friends embark on a trip to Goa that goes completely off-track when they wake up in a hotel room and find cocaine that belongs to a don named Mendoza.")

fchanger(2,
    './banner/bg3-kung-fu-panda-4.avif',
    './title/bg3-Kung-Fu-Panda-4.png',
    "2024",
    "1h 33m",
    "Action,Adventure,Animation",
    "Po faces his greatest challenge yet when he ventures to the big city and meets a new villain called the Chameleon.")

fchanger(3,
    './banner/bg4-jawan.jpg',
    './title/bg4-Jawan.png',
    "2023",
    "2h 49m",
    "Action,Thriller",
    "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.")
