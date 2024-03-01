
export const setToken = (token) => {
    localStorage.setItem("jwt", token);
};

export const getToken = () => {
    try {
        return localStorage.getItem("jwt");
    } catch (e) {
        return "";
    }
};

export const deleteToken = () => {
    localStorage.removeItem("jwt");
};