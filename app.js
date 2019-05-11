// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menu=new MenuScreen();
    document.addEventListener('submit_btn',this.submit_btn);
  }
  // TODO(you): Add methods as necessary.
  submit_btn()
  {
    let x=document.querySelector('#menu');
    console.log(x);
    document.querySelector('#menu').style.display="none";
  }
}
