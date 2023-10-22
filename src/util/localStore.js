
export const saveLocalStore = (key, data) => {
    const dataString = JSON.stringify(data)
    localStorage.setItem(key, dataString);
};