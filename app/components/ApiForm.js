import { useState } from 'react';
import axios from 'axios';
import styles from '/styles/Home.module.css';

export default function ApiForm({ setResponseData }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const parsedData = JSON.parse(jsonInput); // Parse the JSON input string
        console.log(parsedData.data); // This logs the 'data' array

        // Send the parsedData object in the POST request
        const response = await axios.post('https://bajaj-round.vercel.app/bfhl', parsedData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setResponseData(response.data); // Update the state with the API response
        setError(null); // Clear any previous errors
    } catch (err) {
        console.log(err); // Log the error to the console
        setError('Failed to submit data'); // Update the error state
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
