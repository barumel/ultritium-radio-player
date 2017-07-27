import data from '../DummyData';

export class FindAction {
  constructor(url) {
    this.url = url;
  }

  execute(query) {
    const result = data[this.url]['find'];

    const url = `${this.url}?q=${query}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(result);
      }, 2000);
    });
  }
}
