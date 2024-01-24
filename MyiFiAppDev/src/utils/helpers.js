
export function AmountSeperation(amount) {
    try {
      // Extract the integer part
      var amountInteger = Math.floor(amount).toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 0,
      });
  
      // Extract the decimal part
      var amountDecimal = (amount % 1).toFixed(2).substring(1);
  
      return [amountInteger, amountDecimal];
  
    } catch (error) {
      console.log("[Helper] - AmountSeperation() EX: " + error);
    }
  }

