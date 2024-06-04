import React from 'react';

const Page3 = ({ formData, handleChange, errors, handleNext ,handlePrev,documentStatus,lightingDirection,restorationStatus}) => (
    <div className="form-page">
    <h2>اطلاعات کلی</h2>
    <input
        type="number"
        name="mterage"
        placeholder="متراژ"
        value={formData.mterage}
        onChange={handleChange}
    />
    {errors.mterage && <p className="error">{errors.mterage}</p>}



    <input
        type="number"
        name="construction_size"
        placeholder=" متراژ ساخت"
        value={formData.construction_size}
        onChange={handleChange}
    />
    {errors.construction_size && <p className="error">{errors.construction_size}</p>}





    <input
        type="number"
        name="Size_land"
        placeholder=" متراژ زمین"
        value={formData.Size_land}
        onChange={handleChange}
    />
    {errors.Size_land && <p className="error">{errors.Size_land}</p>}



    <input
        type="number"
        name="length"
        placeholder=" طول"
        value={formData.length}
        onChange={handleChange}
    />
    {errors.length && <p className="error">{errors.length}</p>}


    <input
        type="number"
        name="width"
        placeholder=" عرض"
        value={formData.width}
        onChange={handleChange}
    />
    {errors.width && <p className="error">{errors.width}</p>}




    <input
        type="number"
        name="mortgage_price"
        placeholder=" قیمت رهن"
        value={formData.mortgage_price}
        onChange={handleChange}
    />
    {errors.mortgage_price && <p className="error">{errors.mortgage_price}</p>}




    <input
        type="number"
        name="rental_price"
        placeholder="قیمت اجاره"
        value={formData.rental_price}
        onChange={handleChange}
    />
    {errors.rental_price && <p className="error">{errors.rental_price}</p>}



    <select
            name="documentStatus"
            className="select-field"
            value={formData.documentStatus}
            onChange={handleChange}
        >
            <option value="" disabled hidden>نوع ملک</option>
            {documentStatus.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>



        <select
            name="lightingDirection"
            className="select-field"
            value={formData.lightingDirection}
            onChange={handleChange}
        >
            <option value="" disabled hidden>نوع ملک</option>
            {lightingDirection.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>
        

        <div className="radio-group">
            {restorationStatus.map((option, index) => (
                <label key={index} className="radio-option">
                    <input
                        type="radio"
                        name="selectedOption"
                        value={option}
                        checked={formData.selectedOption === option}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </div>

    
    <textarea
        name="description"
        placeholder="توضیحات"
        value={formData.description}
        onChange={handleChange}
    />
    {errors.description && <p className="error">{errors.description}</p>}
    <button className="prev-btn" onClick={handlePrev}>قبلی</button>
    <button className="next-btn" onClick={handleNext}>بعدی</button>
</div>
);

export default Page3;
