import React from 'react';

const Page2 = ({ formData, handleChange, errors, handleNext,handlePrev }) => (
    <div className="form-page">
        <h2>اطلاعات مالک</h2>



        <input
            type="text"
            name="name_first_owner"
            placeholder="نام مالک اول"
            value={formData.name_first_owner}
            onChange={handleChange}
        />
        {errors.name_first_owner && <p className="error">{errors.name_first_owner}</p>}




        <input
            type="text"
            name="phone_first_owner"
            placeholder="شماره تماس مالک اول"
            value={formData.phone_first_owner}
            onChange={handleChange}
        />
        {errors.phone_first_owner && <p className="error">{errors.phone_first_owner}</p>}


        <input
            type="text"
            name="name_second_owner"
            placeholder="نام مالک دوم"
            value={formData.name_second_owner}
            onChange={handleChange}
        />
        {errors.name_second_owner && <p className="error">{errors.name_second_owner}</p>}




        <input
            type="text"
            name="phone_second_owner"
            placeholder="شماره تماس مالک دوم"
            value={formData.phone_second_owner}
            onChange={handleChange}
        />
        {errors.phone_second_owner && <p className="error">{errors.phone_second_owner}</p>}





        <input
            type="text"
            name="name_guard"
            placeholder="نام نگهبان"
            value={formData.name_guard}
            onChange={handleChange}
        />
        {errors.name_guard && <p className="error">{errors.name_guard}</p>}



        <input
            type="text"
            name="phone_guard"
            placeholder="شماره تماس نگهبان"
            value={formData.phone_guard}
            onChange={handleChange}
        />
        {errors.phone_guard && <p className="error">{errors.phone_guard}</p>}


        {/* <input
        type="number"
        name="bathrooms"
        placeholder="حمام"
        value={formData.bathrooms}
        onChange={handleChange}
    /> */}


        {/* <input
            type="number"
            name="price"
            placeholder="قیمت"
            value={formData.price}
            onChange={handleChange}
        />
        {errors.price && <p className="error">{errors.price}</p>}
        <input
            type="number"
            name="bedrooms"
            placeholder="اتاق خواب"
            value={formData.bedrooms}
            onChange={handleChange}
        />
        {errors.bedrooms && <p className="error">{errors.bedrooms}</p>} */}




        <button className="prev-btn" onClick={handlePrev}>قبلی</button>
        <button className="next-btn" onClick={handleNext}>بعدی</button>
    </div>
);

export default Page2;
