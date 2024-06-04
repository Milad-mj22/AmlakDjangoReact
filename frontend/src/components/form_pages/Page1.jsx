import React from 'react';

const Page1 = ({ formData, handleChange, errors, handleNext, propertyTypes ,registrationTypes ,cityName}) => (
    <div className="form-page">
        <h2>نوع و آدرس ملک</h2>

        <select
            name="propertyType"
            className="select-field"
            value={formData.propertyType}
            onChange={handleChange}
        >
            <option value="" disabled hidden>نوع ملک</option>
            {propertyTypes.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>

        {errors.propertyType && <p className="error">{errors.propertyType}</p>}


        <select
            name="registrationTypes"
            className="select-field"
            value={formData.registrationTypes}
            onChange={handleChange}
        >
            <option value="" disabled hidden>نوع فایل ثبتی</option>
            {registrationTypes.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>



        <select
            name="cityName"
            className="select-field"
            value={formData.cityName}
            onChange={handleChange}
        >
            <option value="" disabled hidden>نوع فایل ثبتی</option>
            {cityName.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>



        <input
            type="text"
            name="area"
            placeholder="منطقه"
            className="input-field"
            value={formData.area}
            onChange={handleChange}
        />
        {errors.area && <p className="error">{errors.area}</p>}


        <input
            type="text"
            name="location"
            placeholder="محله"
            className="input-field"
            value={formData.location}
            onChange={handleChange}
        />
        {errors.location && <p className="error">{errors.location}</p>}


        <input
            type="text"
            name="address"
            placeholder="آدرس"
            className="input-field"
            value={formData.address}
            onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        

        <button className="next-btn" onClick={handleNext}>بعدی</button>
    </div>
);

export default Page1;
