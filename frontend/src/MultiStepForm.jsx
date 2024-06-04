




import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './MultiStepForm.css';
import Header from './Header';
import { validatePage1 ,validatePage2,validatePage3 ,validatePage4,validatePage5 } from './components/validation/validatePages'; // Import validation functions
import Page1 from './components/form_pages/Page1'; // Import validation functions
import Page2 from './components/form_pages/Page2';
import Page3 from './components/form_pages/Page3';
import Page4 from './components/form_pages/Page4';
import Page5 from './components/form_pages/Page5';
import { getCsrfToken } from './utils'; // Import the utility function


const MultiStepForm = () => {






    
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        address: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
        ownerName: '',
        ownerContact: '',
        propertyType: '',
        area: ''
    });


    const [errors, setErrors] = useState({});
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [registrationTypes, setRegistrationTypes] = useState([]);  // Example for another dataset
    const [cityName, setCityName] = useState([]);  // Example for another dataset
    const [documentStatus, setDocumentStatus] = useState([]);  // Example for another dataset
    const [lightingDirection, setLightingDirection] = useState([]);  // Example for another dataset
    const [restorationStatus, setRestorationStatusList] = useState([]);  // Example for another dataset

    useEffect(() => {
        const fetchParams = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/get_parms/');
                setPropertyTypes(response.data.property_types);
                setRegistrationTypes(response.data.registration_types);  // Example for another dataset
                setCityName(response.data.CityNameList);  // Example for another dataset
                setDocumentStatus(response.data.DocumentStatusList);  // Example for another dataset
                setLightingDirection(response.data.LightingDirectionList);  // Example for another dataset
                setLightingDirection(response.data.LightingDirectionList);  // Example for another dataset
                setRestorationStatusList(response.data.RestorationStatusList);  // Example for another dataset


                
            } catch (error) {
                console.error('Error fetching parameters:', error);
            }
        };

        fetchParams();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNext = () => {
        let newErrors = {};
        if (page === 1) newErrors = validatePage1(formData);
        else if (page === 2) newErrors = validatePage2(formData);
        else if (page === 3) newErrors = validatePage3(formData);
        else if (page === 4) newErrors = validatePage4(formData);
        else if (page === 5) newErrors = validatePage5(formData);
        // else if (page === 6) newErrors = validatePage6(formData);
        // else if (page === 7) newErrors = validatePage7(formData);

        if (Object.keys(newErrors).length === 0) {
            setPage(page + 1);
        } else {
            setErrors(newErrors);
        }
    };

    const handlePrev = () => {
        setErrors({});
        setPage(page - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {}
        // const newErrors = validatePage5();
        if (Object.keys(newErrors).length === 0) {
            try {

                const response = await axios.post(
                    'http://localhost:8000/api/properties/',
                    {},
                    {
                        headers: {
                            'X-CSRFToken': getCsrfToken(),
                        },
                    }
                );


                // await axios.post('http://localhost:8000/api/properties/');
                // const response = await axios('http://localhost:8000/api/properties/', formData);
                console.log('Property added successfully:', response.data);
                setFormData({
                    address: '',
                    price: '',
                    bedrooms: '',
                    bathrooms: '',
                    description: '',
                    ownerName: '',
                    ownerContact: '',
                    propertyType: '',
                    area: ''
                });
                setPage(1);
            } catch (error) {
                console.error('Error adding property:', error.response.data);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <Header>
            <div className="multi-step-form-container">
                <div className="progress-bar">
                    {[1,2,3,4,5].map((step, index) => (
                        <React.Fragment key={step}>
                            {index !== 0 && <div className={`line ${step <= page ? 'completed' : ''}`} />}
                            <div className={`step ${step === page ? 'active' : ''}`}>
                                {step}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                {page === 1 && <Page1 formData={formData}  handleChange={handleChange} errors={errors} handleNext={handleNext} propertyTypes={propertyTypes} registrationTypes={registrationTypes} cityName={cityName}/>}
                {page === 2 && <Page2 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} handlePrev={handlePrev} />}
                {page === 3 && <Page3 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} handlePrev={handlePrev} documentStatus={documentStatus} lightingDirection={lightingDirection} restorationStatus={restorationStatus} />}
                {page === 4 && <Page4 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} handlePrev={handlePrev} />}
                {page === 5 && <Page5 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} handlePrev={handlePrev}  handleSubmit={handleSubmit} />}
                {/* {page === 6 && <Page1 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} />}
                {page === 7 && <Page1 formData={formData} handleChange={handleChange} errors={errors} handleNext={handleNext} />} */}
            </div>
        </Header>
    );
};

export default MultiStepForm;
