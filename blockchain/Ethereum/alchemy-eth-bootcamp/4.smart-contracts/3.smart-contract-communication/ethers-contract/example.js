async function getNumber(contract) {
  const number = await contract.getNumber();
  console.log(number); // 3
}