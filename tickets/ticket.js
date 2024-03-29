function generateTicket(Row, [Day, month], SeatNo, MovieName, urlmovie) {
    const ticketTemp = `<div class="barcode">
    <div class="card">
        <h6>ROW ${Row}</h6>
        <h6>${Day} ${month}</h6>
    </div>
    <div class="card">
        <h6>Seat ${SeatNo}</h6>
        <h6>06:00 PM</h6>
    </div>

    <svg id="barcode"></svg>

    <h5>
        <img src="../image/logo.png">
    </h5>
</div>
<div class="tic-details">
    <div class="type">4DX</div>
    <h5 class="pvr"><span>Movies</span>HUB</h5>
    <h1>${MovieName}</h1>
    <div class="seat-det">
        <div class="seat-cr">
            <h6>ROW</h6>
            <h6>${Row}</h6>
        </div>
        <div class="seat-cr">
            <h6>SEAT</h6>
            <h6>${SeatNo}</h6>
        </div>
        <div class="seat-cr">
            <h6>DATE</h6>
            <h6>${Day} <sub>${month}</sub></h6>
        </div>
        <div class="seat-cr">
            <h6>TIME</h6>
            <h6>06:00 <sub>PM</sub></h6>
        </div>
    </div>
</div>`

    const ticketContainer = document.querySelector(".ticket-container");
    const NewTicket = document.createElement("div");
    NewTicket.className = "ticket";
    NewTicket.innerHTML = ticketTemp;
    ticketContainer.append(NewTicket);
    document.querySelector(".tic-details").style.background = `url(${urlmovie}) center 0px/cover`;
}


generateTicket(
    "M",
    ['29', 'Mar'],
    "12",
    "Jawan",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg"
)


