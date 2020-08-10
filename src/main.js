class ExchangeCall {
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
    } catch(error) {
      return false;
    }
  }
}

$(document).ready(function(){
  let exchangeRates;

  (async () => {
    let exchangeCall = new ExchangeCall();
    exchangeRates = await exchangeCall.getRates();
    if (exchangeRates === false) {
      // say an error happened
    } else if (exchangeRates.result === error) {
      // print error
    } else {
      // enable submit button
    }
  })();

  $("#rateConvert").click(function() {
    const valueStart = $("#currencyStart").val();
    const currency = $("#currencyKey").val();
    let valueEnd;

    valueEnd = valueStart * exchangeRates.conversion_rates[currency];

    // print valueEnd
  });
});