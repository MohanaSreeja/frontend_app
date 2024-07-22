import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ItalicToggleProps {
  font: string;
  weight: string;
  onItalicChange: (italic: boolean) => void;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ font, weight, onItalicChange }) => {
  const [italicSupported, setItalicSupported] = useState(false);

  useEffect(() => {
    axios.get('/path-to-your-json-file')
      .then(response => {
        const data = response.data;
        if (data[font] && data[font].variants.includes(`${weight}italic`)) {
          setItalicSupported(true);
        } else {
          setItalicSupported(false);
        }
      })
      .catch(error => console.error('Error checking italic support:', error));
  }, [font, weight]);

  return (
    <label>
      <input
        type="checkbox"
        disabled={!italicSupported}
        onChange={(e) => onItalicChange(e.target.checked)}
      />
      Italic
    </label>
  );
};

export default ItalicToggle;
