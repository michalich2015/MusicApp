document.querySelectorAll('.btn.btn-default.btn-xs.btn-mute').forEach(element => {
    element.textContent = 'M';
});
document.querySelectorAll('.btn.btn-default.btn-xs.btn-solo').forEach(element => {
    element.textContent = 'S';
});

var playlistTrack = {


    createButton: (text, selector) => {

        document.querySelectorAll(selector).forEach(element => {
            var button = document.createElement('span');
            button.classList.add('btn', 'btn-default', 'btn-xs', 'btn-'+text);
            button.textContent = text;
            element.appendChild(button);
            return button;
        });

    },


    knobCanvas: () => {

    },


    knobCanvasBg: (colorBg, colorLine) => {
        document.querySelectorAll('.btn-group canvas').forEach( element => {
            if (colorBg !== undefined || colorBg !== null) element.setAttribute('data-ringbgcolor', colorBg);
            if (colorLine !== undefined || colorLine !== null) element.setAttribute('data-ringcolor', colorLine);
        })
    }


}


var player = {

    play: () => {

        var btnPlay = document.querySelector('.btn-play.btn-success');
        var btnPause = document.querySelector('.btn-pause.btn-warning');


        if (btnPause.classList.contains('hidden')) {
            btnPlay.classList.add('hidden');
            btnPause.classList.remove('hidden');
        } else if (!btnPause.classList.contains('hidden')) {
            btnPause.classList.add('hidden');
            btnPlay.classList.remove('hidden');
        }

    }
}


document.querySelector('.btn-play').addEventListener('click', player.play, false);
document.querySelector('.btn-pause').addEventListener('click', player.play, false);
playlistTrack.createButton('FX', '.controls .btn-group');