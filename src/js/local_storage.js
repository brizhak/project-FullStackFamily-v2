//Якщо потрібні дії з Локал Сторідж - імпортуйте собі у файл.
import Notiflix from "notiflix";
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
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
};

function getFromLocal(key) {
    try {
        const changingKey = localStorage.getItem(key);
        return changingKey === null ? undefined : JSON.parse(changingKey);
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
};

function removeFromLocal(key) {
    try {
        if (key === null) {
            return undefined;
        }
        localStorage.removeItem(key);
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
}