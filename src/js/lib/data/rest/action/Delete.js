import axios from 'axios';

export class DeleteAction {
  constructor(url) {
    this.url = url;
  }

  async execute(id, options) {
    const url = `${this.url}/${id}`;
    let result = {};

    try {
      const response = await axios.delete(url);
      result = response.data;
    } catch(err) {
      throw err;
    }

    return result;
  }
}
