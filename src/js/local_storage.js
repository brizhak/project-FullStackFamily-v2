//Якщо потрібні дії з Локал Сторідж - імпортуйте собі у файл.
export default {
    saveBook,
    getBook,
    removeBook,
};

function saveBook(key, value) {
    try {
        const changingValue = JSON.stringify(value);
        localStorage.setItem(key, changingValue);
    } catch (error) {
        console.log("Seve book error: ", error);
    }
};

function getBook(key) {
    try {
        const changingKey = localStorage.getItem(key);
        return changingKey === null ? undefined : JSON.parse(changingKey);
    } catch (error) {
        console.log("Get book error: ", error);
    }
};

function removeBook(key) {
    try {
        if (key === null) {
            return undefined;
        }
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Remove book error: ", error);
    }
}