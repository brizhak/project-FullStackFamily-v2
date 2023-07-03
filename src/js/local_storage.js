//Якщо потрібні дії з Локал Сторідж - імпортуйте собі у файл.
export default {
    saveInLocal,
    getFromLocal,
    removeFromLocal,
};

function saveInLocal(key, value) {
    try {
        const changingValue = JSON.stringify(value);
        localStorage.setItem(key, changingValue);
    } catch (error) {
        console.log("Seve book error: ", error);
    }
};

function getFromLocal(key) {
    try {
        const changingKey = localStorage.getItem(key);
        return changingKey === null ? undefined : JSON.parse(changingKey);
    } catch (error) {
        console.log("Get book error: ", error);
    }
};

function removeFromLocal(key) {
    try {
        if (key === null) {
            return undefined;
        }
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Remove book error: ", error);
    }
}