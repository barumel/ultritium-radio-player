import data from '../DummyData';
import axios from 'axios';

export class FindAction {
  constructor(url) {
    this.url = url;
  }

  async execute(query, options) {
    query = JSON.stringify(query);
    const url = `${this.url}?q=${query}`;
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
