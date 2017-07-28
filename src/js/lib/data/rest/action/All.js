import data from '../DummyData';
import axios from 'axios';

export class AllAction {
  constructor(url) {
    this.url = url;
  }

  async execute(options) {
    const url = `${this.url}`;
    let result = [];

    try {
      const response = await axios.get(url);
      result = response.data;
    } catch(err) {
      throw err;
    }

    return result;
  }
}
