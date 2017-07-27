import data from '../DummyData';

export class PostAction {
  constructor(url) {
    this.url = url;
  }

  execute(data) {
    data.id = new Date();
    const result = data

    const url = `${this.url}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(data);
      }, 5000);
    });
  }
}
