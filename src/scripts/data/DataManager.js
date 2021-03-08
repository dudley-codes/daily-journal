export const getJournalEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}

console.log(getJournalEntries());
// const journal = getEntries()

// export const getJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }