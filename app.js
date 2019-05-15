// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menu=new MenuScreen(); 
    this.music_screen=new MusicScreen(); 
    this.onSubmit=this.onSubmit.bind(this);
    this.returnSong=this.returnSong.bind(this);
    document.addEventListener('submit',this.onSubmit);
    document.addEventListener('return_song',this.returnSong);
  }
  // TODO(you): Add methods as necessary.
  onSubmit(event)
  {
    document.querySelector('#music').classList.remove('inactive');
    event.preventDefault();
    document.querySelector('#menu').style.display='none';
    const song=document.querySelector('#song-selector');
    const theme=document.querySelector('#query-input');
    console.log(song.value+","+theme.value);
    theme.setAttribute("value",theme.value);
    this.music_screen.setSong();
    this.music_screen.fron_gifDisplay=new GifDisplay('fron_layer');
    this.music_screen.back_gifDisplay=new GifDisplay('back_layer');
    this.music_screen.fron_gifDisplay
    //更改 remove #music inactive 
  }
  returnSong(event)
  {
    const song=document.querySelector('#song-selector').value;
    this.music_screen.song_url=event.detail[song];

  }
}
