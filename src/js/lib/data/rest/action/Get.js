export class Get {
  constructor(url) {
    this.url = url;
  }

  execute(id) {
    const url = `${this.url}/${id}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('RESOLVE GET');
        return resolve({title: 'Samy Deluxe', description: 'Greatest Hits'});
      }, 5000);
    });
  }
}
