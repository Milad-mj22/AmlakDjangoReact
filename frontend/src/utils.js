export const getCsrfToken = () => {
    let token = null;
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'csrftoken') {
            token = value;
        }
    });
    return token;
};
