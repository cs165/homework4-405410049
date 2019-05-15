// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    var theme=['candy','charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
   .then(function onResponse(response)
    {
      return response.json();
    })
    .then(function onReady(json)
    {
      let song_url=new Object();
      for(let i in json)
      {  
       // console.log(i);
        let node=document.createElement("option");
        let textnode=document.createTextNode(i);   
        node.appendChild(textnode);   
        document.querySelector('#song-selector').appendChild(node);
        song_url[i]=json[i].songUrl;        
      }
      document.dispatchEvent(new CustomEvent('return_song',{detail:song_url}));
    });
    const theme_val=theme[Math.floor(Math.random()*10)];
    console.log(theme[Math.floor(Math.random()*10)]);
    document.querySelector('#query-input').setAttribute("value",theme_val);
  }
  // TODO(you): Add methods as necessary.
  }
