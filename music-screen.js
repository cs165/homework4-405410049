// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.   
    this.clickPlay=this.clickPlay.bind(this);
    this.setSong=this.setSong.bind(this);
  //  document.querySelector('.play_img').addEventListener('click',this.clickPlay);
    this.play_flag=false;
    this.audio=new AudioPlayer();
    this.song_url=null;
    this.fron_gifDisplay=new GifDisplay('fron_layer');
    this.back_gifDisplay=new GifDisplay('back_layer');
    this.btn=new PlayButton(this.audio);
  }
  setSong(song_url)
  {
 //   this.fron_gifDisplay=new GifDisplay('fron_layer');
  //  this.back_gifDisplay=new GifDisplay('back_layer');
    console.log(song_url);
    this.audio.setSong(song_url);
    this.audio.play(); 
    var fron_gifDisplay=this.fron_gifDisplay;
    var back_gifDisplay=this.back_gifDisplay;
    document.querySelector('.play_img').setAttribute("src","images/pause.png");
    this.audio.setKickCallback(function(){
      const fron_layer=document.querySelector('.fron_layer');
      const back_layer=document.querySelector('.back_layer');
        if(fron_layer.classList.contains('inactive'))
        {
           back_layer.classList.add('inactive');
           fron_layer.classList.remove('inactive');
           back_gifDisplay.changeGif();
        }
        else
        {
          fron_layer.classList.add('inactive');
          back_layer.classList.remove('inactive');
          fron_gifDisplay.changeGif();
        }
    });
  }
  clickPlay()
  {
    const img=document.querySelector('.play_img');
    if(this.play_flag)  //播放中
    {
      img.setAttribute("src","images/pause.png");
      this.play_flag=false;
      this.audio.play();
    }
    else
    {
      img.setAttribute("src","images/play.png");
      this.play_flag=true;
      this.audio.pause();
    }
  }
}
