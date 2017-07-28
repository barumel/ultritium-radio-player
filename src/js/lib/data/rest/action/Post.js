import data from '../DummyData';

export class PostAction {
  constructor(url) {
    this.url = url;
  }

  execute(data) {
    const result = data;
    result.id = new Date();

    const url = `${this.url}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(data);
      }, 5000);
    });
  }
}
