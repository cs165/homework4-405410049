// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(audio) {
    this.play_flag=false;
    this.audio=audio;
    this.clickPlay=this.clickPlay.bind(this);
    document.querySelector('.play_img').addEventListener('click',this.clickPlay);
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
