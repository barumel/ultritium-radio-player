import axios from 'axios';

const playlists = [{
  _id: 1,
  title: "Super Oesch's",
  description: "Super Oesch's greatest hits",
  thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
  count: 25
}, {
  _id: 2,
  title: 'Samy Deluxe',
  description: "Samy's greatest hits",
  thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg',
  count: 250
}, {
  _id: 3,
  title: 'Power Rangers',
  description: "Power Rangers Squad",
  thumb: 'https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346',
  count: 50000
}];

export class RecentAction {
  constructor(url) {
    this.url = url;
  }

  async execute() {
    const query = JSON.stringify({type: 'recent'});
    const url = `${this.url}?query=${query}`;
    let result = [];

    try {
      const response = await axios.get(url);
      result = response.data;
    } catch(err) {
      throw err;
    }

    return result;
  }
}
