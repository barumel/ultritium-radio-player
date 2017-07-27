import data from '../DummyData';

export class PutAction {
  constructor(url) {
    this.url = url;
  }

  execute(id) {
    const result = data[this.url]['get'];

    const url = `${this.url}/${id}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(result);
      }, 5000);
    });
  }
}
