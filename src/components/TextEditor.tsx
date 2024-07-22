import React, { useState, useEffect } from 'react';
import FontSelector from './FontSelector';
import FontWeightSelector from './FontWeightSelector';
import ItalicToggle from './ItalicToggle';

const TextEditor: React.FC = () => {
  const [font, setFont] = useState('Arial');
  const [weight, setWeight] = useState('400');
  const [italic, setItalic] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const savedFont = localStorage.getItem('font');
    const savedWeight = localStorage.getItem('weight');
    const savedItalic = localStorage.getItem('italic') === 'true';
    const savedText = localStorage.getItem('text');

    if (savedFont) setFont(savedFont);
    if (savedWeight) setWeight(savedWeight);
    if (savedItalic) setItalic(savedItalic);
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem('font', font);
    localStorage.setItem('weight', weight);
    localStorage.setItem('italic', italic.toString());
    localStorage.setItem('text', text);
  }, [font, weight, italic, text]);

  return (
    <div>
      <FontSelector onFontChange={setFont} />
      <FontWeightSelector font={font} onWeightChange={setWeight} />
      <ItalicToggle font={font} weight={weight} onItalicChange={setItalic} />
      <textarea
        style={{
          fontFamily: font,
          fontWeight: weight,
          fontStyle: italic ? 'italic' : 'normal',
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextEditor;
