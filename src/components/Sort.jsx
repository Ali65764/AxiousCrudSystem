import React from 'react';

function Sort({ onSortChange }) {
  const handleSelectChange = (event) => {
    onSortChange(event.target.value);
  };

  const handleButtonClick = (sortType) => {
    onSortChange(sortType);
  };

  return (
    <div className='mt-2'>
      <div className='text-center'>
        <select id="sorts" onChange={handleSelectChange}>
          <option value="A-Z Fullname">A-Z Fullname</option>
          <option value="Z-A Fullname">Z-A Fullname</option>
          <option value="Low To High Age">Low To High Age</option>
          <option value="High To Low Age">High To Low Age</option>
        </select>
      </div>
      <div className='text-white text-center mt-3 mb-3'>
        <button className='btn btn-primary' onClick={() => handleButtonClick('A-Z Fullname')}>
          A-Z Fullname
        </button>
        <button className='btn btn-info ms-2' onClick={() => handleButtonClick('Z-A Fullname')}>
          Z-A Fullname
        </button>
        <button className='btn btn-success ms-2' onClick={() => handleButtonClick('Low To High Age')}>
          Low To High Age
        </button>
        <button className='btn btn-warning ms-2' onClick={() => handleButtonClick('High To Low Age')}>
          High To Low Age
        </button>
        <button className='btn btn-danger ms-2' onClick={() => handleButtonClick('')}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Sort;
