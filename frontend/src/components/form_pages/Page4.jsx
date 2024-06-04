import React from 'react';

const Page4 = ({ formData, handleChange, errors, handleNext,handlePrev }) => (
    <div className="form-page">
    <h2>صفحه 4</h2>
    <input
        type="text"
        name="ownerName"
        placeholder="نام مالک"
        value={formData.ownerName}
        onChange={handleChange}
    />
    {errors.ownerName && <p className="error">{errors.ownerName}</p>}
    <button className="prev-btn" onClick={handlePrev}>قبلی</button>
    <button className="next-btn" onClick={handleNext}>بعدی</button>
</div>
);

export default Page4;
