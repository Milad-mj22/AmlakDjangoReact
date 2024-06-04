import React from 'react';

const Page5 = ({ formData, handleChange, errors, handleNext,handlePrev ,handleSubmit}) => (
    <div className="form-page">
        <h2>صفحه 5</h2>
        <input
            type="text"
            name="ownerContact"
            placeholder="تماس مالک"
            value={formData.ownerContact}
            onChange={handleChange}
        />
        {errors.ownerContact && <p className="error">{errors.ownerContact}</p>}
        <button className="prev-btn" onClick={handlePrev}>قبلی</button>
        <button className="submit" onClick={handleSubmit}>ذخیره</button>

    </div>
);

export default Page5;
