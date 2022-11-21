import "../App.css";
import {useState} from 'react';

function FeedbackForm({onSubmit}) {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? 'please provide a comment explaining why the experience was not good. Minimum length is 10 characters'
    : 'optional feedback';

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>feedback form</h2>
          <div className="Field">
            <label htmlFor="score">score: {score} ⭐</label>
            <input 
              value={score}
              onChange={(e) => {setScore(e.target.value);}}
              type="range"
              min="0"
              max="10"
              id="score"
            />
          </div>
          <div className="Field">
            <label>comments: </label>
            <textarea 
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {setComment(e.target.value);}} 
            />
          </div>
        </fieldset>
        <button type="submit" disabled={isDisabled}>
            Submit
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm;