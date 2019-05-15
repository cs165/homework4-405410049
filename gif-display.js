// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(layer) {
    this.layer=layer;
    this.all_gif=new Array();
    this.onReady=this.onReady.bind(this);
    var query=document.querySelector('#query-input').getAttribute('value')
    var apiKey="0TUuG4fV3UsoHcrfaBoyhIt9Q91ntWSK";
    query=encodeURIComponent(query);
    var url = "https://api.giphy.com/v1/gifs/search?q="+query+"&api_key="+apiKey+"&limit=25&rating=g";
    fetch(url)
    .then(function onResponse(response)
    {
      return response.json();
    })
    .then(this.onReady);
  }
  onReady(json)
  {
    const index=Math.floor(Math.random()*25);
    const gifUrl = json.data[index].images.downsized.url;
    for(let i=0;i<json.data.length;i++)
      this.all_gif[i]=json.data[i].images.downsized.url;
    const set_layer='.'+this.layer;
    document.querySelector(set_layer).style.backgroundImage="url("+gifUrl+")";
  }
  changeGif()
  {
    const index=Math.floor(Math.random()*25);
    const gifUrl=this.all_gif[index];
    const set_layer='.'+this.layer;
    document.querySelector(set_layer).style.backgroundImage="url("+gifUrl+")";
  }
}
