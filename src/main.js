import { ExchangeCall } from "./exchange.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

$(document).ready(function(){
  let exchangeRate;

  (async () => {
    let exchangeCall = new ExchangeCall();
    exchangeRate = await exchangeCall.getRates();
    if (exchangeRate === false) {
      // say an error happened
    } else if (exchangeRate.result === error) {
      // print error
    } else {
      // enable submit button
    }
  })();

  $("#rateConvert").click(function() {
    const valueStart = $("#currencyStart").val();
    const currency = $("#currencyKey").val();
    let valueEnd;

    if (exchangeRate.conversion_rates[currency] > 0) {
      valueEnd = valueStart * exchangeRate.conversion_rates[currency];
      // print valueEnd
    } else {
      // print error message
    }

  });
});