// Get Input Vield Value
const getTheInputValue = (fieldId) => {
  const inputField = document.getElementById(fieldId);
  const value = parseFloat(inputField.value);
  return value;
};

// Set Element Value
const setElementValue = (fieldId, value) => {
  const element = document.getElementById(fieldId);
  element.innerText = value;
};

// Get Element Valule
const getElementValue = (elementId) => {
  const element = document.getElementById(elementId);
  const value = Number(element.innerText);
  return value;
};

// Calculate Function

document.getElementById("calculate").addEventListener("click", (e) => {
  const income = getTheInputValue("income");
  const foodCost = getTheInputValue("food-cost");
  const rentCost = getTheInputValue("rent-cost");
  const clothesCost = getTheInputValue("clothe-cost");

  if (!isNaN(foodCost) && !isNaN(rentCost) && !isNaN(clothesCost)) {
    const totalCost = foodCost + rentCost + clothesCost;

    if (income > totalCost) {
      const balance = income - totalCost;
      if (balance >= 1000) {
        setElementValue("total-expens", totalCost);
        setElementValue("balance", balance);

        document.getElementById("food-cost").value = "";
        document.getElementById("rent-cost").value = "";
        document.getElementById("clothe-cost").value = "";
      } else {
        alert("You are spending Too Much. You shoud keep 1000 for imergency");
      }
    } else {
      alert("Can't Spend More then Income");
    }
  } else {
    alert("Please Enter Only Number input");
  }
});

document.getElementById("savings-btn").addEventListener("click", () => {
  const saveingPercentage = getTheInputValue("saving-amount");
  if (!isNaN(saveingPercentage)) {
    if (saveingPercentage >= 0 && saveingPercentage <= 100) {
      const income = getTheInputValue("income");

      const balance = getElementValue("balance");
      const sevingamount = (saveingPercentage * income) / 100;
      const remainingBalance = balance - sevingamount;

      if (balance > sevingamount) {
        setElementValue("savings", sevingamount);
        setElementValue("remain-balance", remainingBalance);
        document.getElementById("saving-amount").value = "";
        document.getElementById("income").value = "";
      } else {
        alert("You Can't save more then you balance");
      }
    } else {
      alert("You Can't save more then 100% of your money");
    }
  } else {
    alert("Please only Input Number Value");
  }
});
