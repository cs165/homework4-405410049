// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    this.song_url=new Object();
    this.onReady=this.onReady.bind(this);
    this.theme=['candy','charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
    .then(function onResponse(response)
    {
      return response.json();
    })
    .then(this.onReady);
  }
  // TODO(you): Add methods as necessary.
  onReady(json)
  {
      for(let i in json)
      {  
       // console.log(i);
        let node=document.createElement("option");
        let textnode=document.createTextNode(i);   
        node.appendChild(textnode);   
        document.querySelector('#song-selector').appendChild(node);
        this.song_url[i]=json[i].songUrl;            
      }
      const theme_val=this.theme[Math.floor(Math.random()*10)];
      document.querySelector('#query-input').setAttribute("value",theme_val);
       //    document.dispatchEvent(new CustomEvent('return_song',{detail:song_url}));
  }
}
