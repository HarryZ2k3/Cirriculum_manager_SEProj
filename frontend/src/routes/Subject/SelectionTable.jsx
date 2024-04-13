import React, { useState } from 'react';





function SelectionTable(transcript,onSelection) {
    
    const [selectedOption, setSelectedOption] = useState('');

  
 // const [transcript] = props;


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Chọn một tùy chọn:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        {transcript.map((semester, index) => (
            <option value={index}>semester{index}</option>
        ))}
        <option value="option1">Tùy chọn 1</option>
        <option value="option2">Tùy chọn 2</option>
        <option value="option3">Tùy chọn 3</option>
      </select>
      <p>Bạn đã chọn: {selectedOption}</p>
    </div>
  );
}

export default SelectionTable;
