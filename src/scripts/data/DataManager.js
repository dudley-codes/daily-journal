import { EntryListComponent } from "/scripts/EntryList.js";
const getJournalEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}

console.log(getJournalEntries());

export const showPostList = () => {
	const entryLog = document.querySelector("#entryLog");
	getJournalEntries()
		.then((response) => {
			const sortedByDate = response.sort(
				(currentEntry, nextEntry) =>
					Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
			);
			return sortedByDate;
		})
		.then((allPosts) => {
			entryLog.innerHTML = EntryListComponent(allPosts);
		});
};

const WubbaLubbaDubDub = () => {
	return fetch("https://raw.githubusercontent.com/eatsleeptravel/WubbaLubbaDubDub/main/rickQuotes.json")
		.then(response => response.json())
		.then(parsedData => {
			return parsedData;
		})
};

const randomizer = WubbaLubbaDubDub()
	.then(rickQuotes => {
		console.log(rickQuotes[Math.floor(Math.random() * rickQuotes.length)].what);
});