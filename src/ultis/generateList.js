import { convertToCurrency } from "./convertToCurrency";

export const generateIncomeOptions = () => {
  const result = [];
  let valueObj = {};
  for (let index = 1; index <= 7; index++) {
    let obj = {};
    if (index === 1) {
      valueObj = {
        incomeFrom: index * 10000000,
        incomeTo: index * 10000000 + 5000000,
      };
      obj = {
        label: `${convertToCurrency(index * 10000000)} - ${convertToCurrency(
          index * 10000000 + 5000000,
        )}`,
        value: JSON.stringify(valueObj),
      };
    } else {
      valueObj =
        index === 7
          ? { incomeFrom: (index - 1) * 10000000 }
          : {
            incomeFrom: (index - 0.5) * 10000000,
            incomeTo: (index - 0.5) * 10000000 + 5000000,
          };
      obj = {
        label:
          index === 7
            ? `> ${convertToCurrency((index - 1) * 10000000)}`
            : `${convertToCurrency(
              (index - 0.5) * 10000000,
            )}-${convertToCurrency((index - 0.5) * 10000000 + 5000000)}`,
        value: JSON.stringify(valueObj),
      };
    }

    result.push(obj);
  }

  return result;
};

export const generateAgeOptions = () => {
  const result = [];
  let valueObj = {};
  for (let index = 1; index <= 5; index++) {
    let obj = {};
    if (index === 1) {
      valueObj = {
        ageFrom: index * 18,
        ageTo: index * 25,
      };
      obj = {
        label: `${valueObj.ageFrom} - ${valueObj.ageTo}`,
        value: JSON.stringify(valueObj),
      };
    } else {
      valueObj = {
        ageFrom: index * 10 + 5,
        ageTo: index * 10 + 10,
      };
      obj = {
        label: `${valueObj.ageFrom} - ${valueObj.ageTo}`,
        value: JSON.stringify(valueObj),
      };
    }

    result.push(obj);
  }
  return result;
};
