import { useState } from 'react';
import { init, send } from 'emailjs-com';
import styles from '../styles/Form.module.css';

init("POBKLVg6n0fX_s9DO");

export default function Form() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const messageData = {
        from_name: name,
        comment: comment,
        rating: rating,
        to_name: 'Jorge',
        reply_to: 'ssgsj.carranza@gmail.com'
      };
      const result = await send('service_9xnk80r', 'template_rgfkn4g', messageData);
      console.log(result);
      setMessage('Thank you for your feedback!');
    } catch (error) {
      console.log(error);
      setMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Hey Sarah Leave a Review :D</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            className={styles.formField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment">How was your date:</label>
          <textarea
            className={styles.formField}
            id="comment"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" value={rating} onChange={handleRatingChange} required className={styles.formField}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}


//npm install -D tailwindcss
//npx tailwindcss init
//npm install -D tailwindcss postcss autoprefixer
//npm install -D prettier prettier-plugin-tailwindcss
