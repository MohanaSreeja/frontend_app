import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FontWeightSelectorProps {
  font: string;
  onWeightChange: (weight: string) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ font, onWeightChange }) => {
  const [weights, setWeights] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/path-to-your-json-file')
      .then(response => {
        const data = response.data;
        if (data[font]) {
          setWeights(data[font].weights);
        }
      })
      .catch(error => console.error('Error loading font weights:', error));
  }, [font]);

  return (
    <select onChange={(e) => onWeightChange(e.target.value)}>
      {weights.map((weight) => (
        <option key={weight} value={weight}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
