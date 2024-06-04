const validatePage1 = (formData) => {
    const newErrors = {};
    if (!formData.address) {
        newErrors.address = 'آدرس مورد نیاز است';
    }
    return newErrors;
};



const validatePage2 = (formData) => {
    const newErrors = {};
    if (!formData.name_first_owner) {
        newErrors.name_first_owner = 'نام مالک اول مورد نیاز است';
    }
    if (!formData.phone_first_owner) {
        newErrors.phone_first_owner = 'شماره تماس مالک اول مورد نیاز است';
    } 
    return newErrors;
};

const validatePage3 = (formData) => {
    const newErrors = {};
    if (!formData.mterage) {
        newErrors.mterage = 'متراژ مورد نیاز است';
    } 
    return newErrors;
};

const validatePage4 = (formData) => {
    const newErrors = {};
    if (!formData.ownerName) {
        newErrors.ownerName = 'نام مالک مورد نیاز است';
    }
    return newErrors;
};

const validatePage5 = (formData) => {
    const newErrors = {};
    if (!formData.ownerContact) {
        newErrors.ownerContact = 'تماس مالک مورد نیاز است';
    } else if (isNaN(formData.ownerContact)) {
        newErrors.ownerContact = 'تماس باید یک عدد باشد';
    }
    return newErrors;
};

const validatePage6 = (formData) => {
    const newErrors = {};
    if (!formData.propertyType) {
        newErrors.propertyType = 'نوع ملک مورد نیاز است';
    }
    return newErrors;
};

const validatePage7 = (formData) => {
    const newErrors = {};
    if (!formData.area) {
        newErrors.area = 'مساحت مورد نیاز است';
    } else if (isNaN(formData.area)) {
        newErrors.area = 'مساحت باید یک عدد باشد';
    }
    return newErrors;
};



export { validatePage1 ,validatePage2,validatePage3 ,validatePage4,validatePage5};