function cardAdder( htmlClass,img, title, duration, genre, lang, release, description) {
    const details = `<div class="details ${htmlClass}">
<div class="image">
    <img src="${img}">
</div>
<div class="content">
    <div class="title-line">
        <h1>${title}</h1>
    <h2><i class="fa-regular fa-clock"></i> ${duration}</h2>
    </div>

    <div class="capsule">
        <span>${genre[0]}</span>
        <span>${genre[1]}</span>
    </div>

    <div class="release">
        <span>${lang}</span>
        <span>${release}</span>
    </div>

    <div class="desc">
        <p>${description}</p>
    </div>

    <button>Book Tickets</button>
</div>
</div>`

    const mainContainer = document.body.querySelector(".book");
    const newDetails = document.createElement("div")
    newDetails.innerHTML = details
    mainContainer.append(newDetails);
};



cardAdder(
    "shaitaan",
    "./image/poster/1.avif",
    "Shaitaan",
    "2h 12m",
    ["Supernatural","Thriller"],
    "Hindi",
    "22 Mar, 2024",
    "Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic."
)
cardAdder(
    "madgaonExpress",
    "./image/poster/2.avif",
    "Madgaon Express",
    "2h 25m",
    ["Comedy","Drama"],
    "Hindi",
    "22 Mar, 2024",
    "Three childhood friends embark on a trip to Goa that goes completely off-track when they wake up in a hotel room and find cocaine that belongs to a don named Mendoza."
)

cardAdder(
    "veer",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/swatantra-veer-savarkar-et00330062-1709646313.jpg",
    "Swatantrya Veer Savarkar",
    "2h 58m",
    ["Biography","Drama"],
    "Hindi, Marathi",
    "22 Mar, 2024",
    `The British termed him the most dangerous man while Indian revolutionaries revered him as "Veer"!
    Yet, he was unsung, unhonoured, unacknowledged & unheard!`
)

cardAdder(
    "panda",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kung-fu-panda-4-et00379741-1706177646.jpg",
    "Kung Fu Panda 4",
    "1h 33m",
    ["Action","Adventure"],
    "Hindi, English",
    "15 Mar, 2024",
    `Po faces his greatest challenge yet when he ventures to the big city and meets a new villain called the Chameleon.`
)

cardAdder(
    "yodha",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yodha-et00318073-1710241050.jpg",
    "Yodha",
    "2h 13m",
    ["Action","Thriller"],
    "Hindi",
    "15 Mar, 2024",
    `After failing at an important mission - years later, the system is shocked to find Arun on board in very mysterious circumstances on a hijacked flight. All evidence points towards Arun being on a mission for revenge against the system that snatched everything away from him.`
)

cardAdder(
    "article370",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/article-370-et00384444-1708669471.jpg",
    "Article 370",
    "2h 40m",
    ["Drama","Political"],
    "Hindi",
    "23 Feb, 2024",
    "In the aftermath of the 2016 Kashmir unrest, a young local field agent, Zooni Haksar, is picked out by Rajeshwari Swaminathan from the Prime Minister`s Office for a top secret mission. Their aim? Cracking down on terrorism and putting an end to the billion dollar conflict economy in the valley, by doing the absolute impossible - Abrogating the notorious Article 370. That too, without spilling a single drop of innocent blood."
)

cardAdder(
    "dune",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dune-part-two-et00331567-1706167890.jpg",
    "Dune: Part Two",
    "2h 46m",
    ["Drama","Political"],
    "English,Hindi",
    "1 Mar, 2024",
    "Dune: Part Two will explore the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee."
)




changeBefore();