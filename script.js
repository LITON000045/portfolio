const form = document.getElementById('whatsapp-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const waNumber = '919038593784';
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

let players = [];
function onYouTubeIframeAPIReady() {
    players[0] = new YT.Player('player1', { events: { 'onStateChange': onPlayerStateChange } });
    players[1] = new YT.Player('player2', { events: { 'onStateChange': onPlayerStateChange } });
    players[2] = new YT.Player('player3', { events: { 'onStateChange': onPlayerStateChange } });
}
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        players.forEach(player => {
            if (player !== event.target) {
                player.pauseVideo();
            }
        });
    }
}