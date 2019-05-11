// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
    .then(function onResponse(response)
    {
      return response.json();
    })
    .then(function onReady(json)
    {
      //console.log(json.鹹豆漿.title);
      for(let i in json)
      {  
        console.log(i);
        let node=document.createElement("option");
        let textnode=document.createTextNode(i);   
        node.appendChild(textnode);  
        document.querySelector('#song-selector').appendChild(node);
      }
    });
  }
  // TODO(you): Add methods as necessary.
}
