import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm  from './9.FeedbackForm';

describe("Feedback Form", () => {
  test("submission is disabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit}/>);

    const rangeInput = screen.getByLabelText(/score: /);
    // screen.getByLabelText()asks the root document to find a label tag whose text contains the regexp defined in as its argument
    fireEvent.change(rangeInput, {target: {value: '4'}});
    // removes onChange syntax to just change
    // fireEvent.change() fills the input and update the state with a value

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    // asserts that the function has not been called
    expect(handleSubmit).not.toHaveBeenCalled();

    // asserts that the submitButton is indeed disabled by having the disabled attribute
    expect(submitButton).toHaveAttribute('disabled');
  });
});