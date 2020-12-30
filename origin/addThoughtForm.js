import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState(null);
  const handleTextChange = ({target}) => {
    alert('xa');
      setText(target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      alert('xa');
      props.addThought(text);
  };
  alert('xaxa');
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
