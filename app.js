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
  //  this.returnSong=this.returnSong.bind(this);
    document.addEventListener('submit',this.onSubmit);
    document.addEventListener('return_song',this.returnSong);
  }
  // TODO(you): Add methods as necessary.
  onSubmit(event)
  {      
    event.preventDefault();    
    //??
    var context=new AudioContext();
    context.resume().then(function(){
      console.log('Playback resumed successfully');
    });    
    const song=document.querySelector('#song-selector');
    const theme=document.querySelector('#query-input');
    console.log(song.value+","+theme.value);
    theme.setAttribute("value",theme.value);
    this.music_screen.setSong(this.menu.song_url[song.value]);    
    this.music_screen.fron_gifDisplay.getFetch();
    this.music_screen.back_gifDisplay.getFetch();

  }
}
