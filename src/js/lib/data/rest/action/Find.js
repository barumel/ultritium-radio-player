const playlists = [{
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
}]

export class Find {
  constructor(url) {
    this.url = url;
  }

  execute(query) {
    const url = `${this.url}?q=${query}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('RESOLVE FIND');
        return resolve(playlists);
      }, 2000);
    });
  }
}
