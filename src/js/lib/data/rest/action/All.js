import data from '../DummyData';

export class All {
  constructor(url) {
    this.url = url;
  }

  execute() {
    const url = `${this.url}`;
    const result = data[this.url]['all'];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(result);
      }, 2000);
    });
  }
}
