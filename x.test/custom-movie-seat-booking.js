const movieList = document.getElementById('movie');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)')
const count = document.getElementById('count');
const total = document.getElementById('total');

function refresh () {
  const getItem = JSON.parse(localStorage.getItem('selectedSeatNumber'));

  if (getItem !== null) {
    seats.forEach((seat, index) => {
      if (getItem.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const getIndex = localStorage.getItem('selectedMovieIndex');

  movieList.selectedIndex = getIndex;
}

function setMovieData (index, price) {
  localStorage.setItem('selectedMovieIndex', index);
  localStorage.setItem('selectedMoviePrice', price);
}

function updateText () {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(seat => {
    return [...seats].indexOf(seat);
  })
  const length = selectedSeats.length;

  localStorage.setItem('selectedSeatNumber', JSON.stringify(seatsIndex));

  count.innerText = length;
  total.innerText = length * movieList.value;
}

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }
  updateText();
});

movieList.addEventListener('change', e => {
  setMovieData(e.target.selectedIndex, +e.target.value);
  updateText();
});

refresh();
updateText();
