import { useState } from 'react';
import axios from 'axios';
import styles from '/styles/Home.module.css';

export default function ApiForm({ setResponseData }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const parsedData = JSON.parse(jsonInput);
        const response = await axios.post('https://bajaj-round.vercel.app/bfhl/', parsedData.data);
        setResponseData(response.data);
        setError(null);
    } catch (err) {
        console.log(err);
        setError('Failed to submit data');
    }
};


  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>API Input</label>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='{"data": ["M","1","334","4","B"]}'
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
