import { useState } from 'react';

export default function FilterResponse({ responseData }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (e) => {
    const { options } = e.target;
    const selected = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setSelectedOptions(selected);
  };

  const renderResponse = () => {
    return (
      <div>
        <div><h3>Output</h3></div>
        {selectedOptions.includes('Alphabets') && <p>Alphabets: {responseData.alphabets.join(', ')}</p>}
        {selectedOptions.includes('Numbers') && <p>Numbers: {responseData.numbers.join(', ')}</p>}
        {selectedOptions.includes('Highest Lowercase Alphabet') && <p>Highest Lowercase Alphabet: {responseData.highest_lowercase}</p>}
      </div>
    );
  };

  return (
    <div>
      <div><h3>Filter your response</h3></div>
      <select multiple onChange={handleSelectChange}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</option>
      </select>
      
      <div className="response">{renderResponse()}</div>
    </div>
  );
}
