/* 
challenge

own implementation of react's state queue

baseState is initial state
queue is an array containing a mix of numbers and updater functions in order

return the final states

*/

export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  // algorithm that react uses to calculate final state

  for (let update of queue) {
    if (typeof update === 'function') {
      // apply updater function
      finalState = update(finalState);
    } else {
      // replace next state
      finalState = update;
    }
  }

  return finalState;
}