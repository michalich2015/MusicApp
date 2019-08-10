var playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  state: 'interactive',
  bpm:121,
  quantize:3,
  tracks:[
    {
      name:"Vocals & Guitar",
    },
    {
      name:"Electric Guitar"
    },
    {
      name:"Wurlitzer"
    },
    {
      name:"Drum Kit"
    },
    {
      name:"Electric Bass"
    }
  ],
  colors: {
    waveOutlineColor: '#464646',
    timeColor: 'grey',
    fadeColor: 'black'
  },
  timescale: true,
  controls: {
    show: true, //whether or not to include the track controls
    width: 175,//width of controls in pixels
  },
  seekStyle : 'line',
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    "src": "media/audio/Vocals30.mp3",
    "name": "Vocals",
    "track" : "Vocals & Guitar",
    "fadeIn": {
      "duration": 0.5
    },
    "fadeOut": {
      "duration": 0.5
    },
    "cuein": 5.918,
    "cueout": 14.5,
    "customClass": "vocals",
    "waveOutlineColor": '#464646'
  },
  {
    "src": "media/audio/Vocals30.mp3",
    "name": "Electric Guitar",
    "track" : "Electric Guitar",
    "fadeIn": {
      "duration": 0.5
    },
    "fadeOut": {
      "duration": 0.5
    },
    "cuein": 14.5,
    "cueout": 16.5,
    "start": 9.5,
    "customClass": "vocals",
    "waveOutlineColor": '#464646'

  },
  {
    "src": "media/audio/BassDrums30.mp3",
    "name": "Electric Bass",
    "track":"Electric Bass",
    "start": 8.5,
    "waveOutlineColor": '#464646',
    "fadeIn": {
      "shape": "logarithmic",
      "duration": 0.5
    },
    "fadeOut": {
      "shape": "logarithmic",
      "duration": 0.5
    }
  },
  {
    "src": "media/audio/Guitar30.mp3",
    "name": "Guitar",
    "track" : "Vocals & Guitar",
    "start": 35.5,
    "fadeOut": {
      "shape": "linear",
      "duration": 0.5
    },
    "waveOutlineColor": '#464646',
    "cuein": 15
  }
]).then(function() {
  //can do stuff with the playlist.

  //initialize the WAV exporter.
  playlist.initExporter();
});