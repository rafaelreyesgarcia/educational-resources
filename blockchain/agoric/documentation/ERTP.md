# electronic rights transfer protocol

token standard for transferring tokens and digital assets in javascript

using ERTP API, create and use assets and transfer them with security properties

ERTP uses OCaps (object capabilities) to enforce access control, if a program has a reference to an object, it can call methods on that object, otherwise it can't

## **asset**

fungible
- interchangable

non-fungible
- not interchangable
- have the same brand

semi-fungible
- have distinct forms
- not interchangeable
- some instances may be interchangeable
  
## **amount**

amount records consist of brand and value

descriptions of digital assets

400 Quatloos  
400 value  
quatloos brand  

### brand

asset's type

### value

asset's size

fungible assets value have to be non-negative integers represented as BigInts
    
### AmountMath

library for operations
    
### brand

ERTP objects have a permanent constraint to working with one specific brand

a brand, its mint and its issuer are all in unchangeable respectiveone-to-one relationships with each other
    
### mint

unique creator of digital assets of a brand

only ERTP mint tha can ever create new assets of a specific brand
    
### issuer

source of truth of how many digital assets each purse and payment holds

validates payments

only issuer that can create a new purse to contain assets and operate on payment
    
### purse

object holding digital assets of a specific brand

### payment

object for transferring digital assets of a brand to another party
    
a purse and a payment only work with one brand

a purse or payment that holds quatloos can't hold moola

can't change the brand, purse or payment originally associated with
  
## **method naming structure**

ERTP methods use a template

- make\<Foo>()  
  creates a foo object returns only that object

- make\<Foo>Kit()  
  creates a new foo object as well as other things

- create\<Foo>()  
  creates a new foo but doesn't return it

- get\<Foo>()  
  returns a foo that exists

- provide\<Foo>  
  if a foo exists, return it, if not create a new foo and return that

  
## **asset creation and storage**

create new mint and issuer associate both 1-1  with brand

```js
const {
  issuer: quatloosIssuer, 
  mint: quatloosMint, 
  brand: quatloosBrand,
} = makeIssuerKit('quatloos');
```

make\<Issuer>Kit  creates a new issuer, and other things, creates a new mint, a formal brand and returns all three objects.
    
create new amount to describe an asset

```js
const quatloosSeven = AmountMath.make(quatloosBrand, 7n);
```

returns an amount description stored in quatloosSeven

amount is only a description of an asset, has no strinsic value

mint new payment for seven quatloos
      
```js
      const quatloosPayment = quatloosMint.mintPayment(quatloosSeven);
```

this mints new 7 quatloos

returned as a payment so its stored in quatloosPayment
    
create empty quatloos purse, deposit quatloos payment in it

```js
const quatloosPurse = quatloosIssuer.makeEmptyPurse();
quatloosPurse.deposit(quatloosPayment);
```

long term storage, a purse is used

payments are generally used to transfer assets rather than hold them

an empty purse is created

then deposit payment into the purse

payment is automaticallly consumed and 7 quatloos are not in purse
  
## **transferring an asset**

create new amount, withdraw payment from purse into a new payment

```js
const quatloosFive = amountMath.mkae(quatloosBrand, 5n);

const myQuatloosPayment = quatloosPurse.withdraw(quatloosFive);
```

creates a new branded amount with a value to describe the withdrawal

amount is just a description, not the actual asset, no intrinsic value

from the quatloos containing purse, you want to withdraw into payment

another party creates a deposit facet for their quatloos purse

```js
const AliceDepositFacet = AliceQuatloosPurse.makeDepositFacet();
```

if alice already has a quatloos purse, to let other parties to safely deposit into it she creates a deposit facet 

anyone that has access to deposit facet can deposit assets to its purse, but can't make withdrawal or get its balance

get access to deposit facet, deposit quatloos payment in it

```js
const depositFacet = E(board).getValue(aliceQuatloosDepositFacetId);

await E(depositFacet).receive(myQuatloosPayment);
```
ERTP uses OCaps, requires you having access to an object in order to run methods on it

alice has to tell you the board Id associated with her purse deposit facet

the id is a reference to the deposit facet

then just tell the facet to receive the payment of 5 quatloos

E() notation is logical bridge that lets you invoke methods on remote objects

## **non-fungible assets**

agoric theather has 1114 seats numbered 1 to 1114

object representing valid tickets has properties

**seat**
number

**show**
string

**start**
string representing time/date ISO 

```js   
const startDateString = new Date(2019, 11, 9, 20, 30).toISOString();

const ticketValues = Array(1114)
  .fill()
  .map((_, i) => ({
    seat: i + 1,
    show: 'hamilton',
    start: startDateString
  }));
```

to create tickets, create javascript objects 

AmountMath makes an ammount

```js
    const {
      mint: agoricMint,
      brand: ticketBrand,
    } = makeIssuerKit('agoric tickets', AssetKind.SET);
```

`makeIssuerKit()` creates a mint that can create agoric theatre assets

### AssetKind.SET

used with non-fungible assets, operates on an array of records (objects) with keys and values
    
### assetKind.NAT

works with natural number values and fungible assets

default for `makeIssuerKit()`
    
## **amounts are not assets**

just a description of the assets how much (value) and what they are (brand)

send you an amount describing how much i want to sell an asset for

sending a payment of the amount would fulfill a trade

an amount is immutable

ERTP assets can only be created by their mint returning a new payment

assets of the exchange are escrowed with zoe

## **object capabilities** 

unless you can reach the mint object associated with the quatloos brand object, you can't use it to create quatloos
  
## **security properties**

purses have a deposit method which takes payment as argument

deposit method checks the payment is genuine and the same brand as the purse

if the check passes, the asset moves from payment to purse, otherwise throws an error

after successful deposit ERTP guarantees
- payment is deleted from issuer records
- issuer no longer recognizes that payment
- purse contains all assets in payment
    
you can create a deposit facet for any purse

object associated with a purse that can be sent to another party instead of a reference to the purse

deposit facets are more secure that giving access to the purse
  
## **promises**

ERTP methods can be asynchronous
    




    


    
    
    




    




