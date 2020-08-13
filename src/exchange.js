export class ExchangeCall {
  async getRates() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let object;
      if (response.ok && response.status === 200) {
        object = response.json();
      } else {
        object = false;
      }
      return object;
    } catch (error) {
      return false;
    }
  }
}