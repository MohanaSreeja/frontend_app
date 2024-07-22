import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FontSelectorProps {
  onFontChange: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ onFontChange }) => {
  const [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/path-to-your-json-file')
      .then(response => setFonts(Object.keys(response.data)))
      .catch(error => console.error('Error loading fonts:', error));
  }, []);

  return (
    <select onChange={(e) => onFontChange(e.target.value)}>
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
