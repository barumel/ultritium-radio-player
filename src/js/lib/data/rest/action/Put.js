import axios from 'axios';

export class PutAction {
  constructor(url) {
    this.url = url;
  }

  async execute(params, options) {
console.log('PUT', params);

    const { _id } = params;
    const url = `${this.url}/${_id}`;
    let result = {};



    try {
      const response = await axios.put(url, params);
      result = response.data;
    } catch(err) {
      throw err;
    }

    return result;
  }
}
