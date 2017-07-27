export class Find {
  constructor(url) {
    this.url = url;
  }

  execute(query) {
    const url = `${this.url}?q=${query}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('RESOLVE FIND');
        return resolve([{title: 'Samy Deluxe', description: 'Greatest Hits'}]);
      }, 2000);
    });
  }
}
