import data from '../DummyData';
import axios from 'axios';

export class PostAction {
  constructor(url) {
    this.url = url;
  }

  async execute(data, options) {
    const url = `${this.url}`;
    let result = {};

    try {
      const response = await axios.post(url, data);
      result = response.data;
    } catch(err) {
      throw err;
    }

    return result;
  }
}
