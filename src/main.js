import { ExchangeCall } from "./exchange.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function(){
  let exchangeRate;

  (async () => {
    let exchangeCall = new ExchangeCall();
    exchangeRate = await exchangeCall.getRates();
    if (exchangeRate === false) {
      $(".responses").append("<p>An unknown error occurred on page loading.</p>");
    } else if (exchangeRate.result === "error") {
      $(".responses").append("<p>" + exchangeRate["error-type"] + "</p>");
    } else {
      $("#button").removeClass("hidden");
    }
  })();

  $("#rateConvert").click(function() {
    const valueStart = $("#currencyStart").val();
    const currency = $("#currencyKey").val();
    let valueEnd;

    if (exchangeRate.conversion_rates[currency] > 0) {
      valueEnd = valueStart * exchangeRate.conversion_rates[currency];
      $(".responses").append("<p>" + valueStart + " in USD is equivalent to " + valueEnd + " in " + currency + "</p>");
    } else {
      $(".responses").append("<p>Something went wrong in calculating your conversation. Can you please check your currency key is correct?</p>");
    }

  });
});