export const getEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}

