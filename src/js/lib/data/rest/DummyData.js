const data = {
  'api/playlist': {
    get: {
      _id: 2,
      title: 'Samy Deluxe',
      description: 'Greatest Hits',
      thumb: 'https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346',
      count: 50000,
      genre: 'rap'
    },
    find: [{
      _id: 2,
      title: 'Samy Deluxe',
      description: "Samy's greatest hits",
      thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg',
      count: 250,
      genre: 'rap'
    }, {
      _id: 3,
      title: 'Power Rangers',
      description: "Power Rangers Squad",
      thumb: 'https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346',
      count: 50000,
      genre: 'geil'
    }],
    all: [{
      _id: 1,
      title: "Super Oesch's",
      description: "Super Oesch's greatest hits",
      thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
      count: 25,
      genre: 'nice'
    }, {
      _id: 2,
      title: 'Samy Deluxe',
      description: "Samy's greatest hits",
      thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg',
      count: 250,
      genre: 'rap'
    }, {
      _id: 3,
      title: 'Power Rangers',
      description: "Power Rangers Squad",
      thumb: 'https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346',
      count: 50000,
      genre: 'geil'
    }],
    recent: [{
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
    }],
    popular: [{
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
    }]
  },
  'api/user': {
    get: {
      name: 'Hans',
      email: 'hans@wurst',
      favorites: [{
        _id: 1,
        title: "Super Oesch's",
        description: "Super Oesch's greatest hits",
        thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
        count: 25
      }]
    },
    all: [{
      name: 'Hans',
      email: 'hans@wurst',
      favorites: [{
        _id: 1,
        title: "Super Oesch's",
        description: "Super Oesch's greatest hits",
        thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
        count: 25
      }]
    }],
    find: [{
      name: 'Hans',
      email: 'hans@wurst',
      favorites: [{
        _id: 1,
        title: "Super Oesch's",
        description: "Super Oesch's greatest hits",
        thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
        count: 25
      }]
    }]
  }
}

export default data;
