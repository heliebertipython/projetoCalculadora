import { generateReturnsArray } from "./src/investimentsGoals.js";

const calculateButton = document.getElementById("calculate-results");
const form = document.getElementById("investment-form");

function renderProgression(event) {
  event.preventDefault();
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const retunrRate = Number(document.getElementById("retunr-rate").value);
  const taxRate = Number(document.getElementById("tax-rate").value);

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    retunrRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}

form.addEventListener("submit", renderProgression);
