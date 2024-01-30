
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


  export function  GetGreeting () {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };

