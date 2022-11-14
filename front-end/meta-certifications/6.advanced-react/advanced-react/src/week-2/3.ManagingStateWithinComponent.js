import { useState } from "react";

function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    /*
    setGiftCard is a state-updating function that updates the value of the state variable (in this case an object)
    the previous state object is added as argument
    the arrow function will return a new object, based on previous state object
    {...prevState} returns a shallow copy of the previous state object using spread syntax
    the rest of the properties can have a value reassigned.
    */ 
    setGiftCard(prevState => {
      return (
        {
          ...prevState,
          text: "your coupon has been used.",
          valid: false,
          instructions: "please visit our restaurant to renew your gift card."
        }
      );
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}

export default App;