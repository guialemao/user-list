const PERSONS = "persons";

const getPersons = () => {
    let persistedData = localStorage.getItem(PERSONS);
    if (persistedData !== null) {
        return JSON.parse(persistedData);
    } else {
        return [];
    }
};

export default getPersons;
