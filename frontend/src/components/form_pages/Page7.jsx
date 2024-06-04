import React from 'react';

const Page1 = ({ formData, handleChange, errors, handleNext }) => (
    <div className="form-page">
        <h2>صفحه 1</h2>
        <input
            type="text"
            name="address"
            placeholder="آدرس"
            value={formData.address}
            onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
        {/* Add other form elements */}
        <button className="next-btn" onClick={handleNext}>بعدی</button>
    </div>
);

export default Page1;
