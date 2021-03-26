import { EntryListComponent } from "/scripts/feed/EntryList.js";

let journalEntries = [];

export const useJournalEntries = () => {
	return [...journalEntries];
}

const getJournalEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
	.then(parsedResponse => {
		journalEntries = parsedResponse
		return parsedResponse;

	})
}

// Fetch call for single Entry
export const getSingleEntry = (entryId) => {
  return fetch(`http://localhost:8088/entries/${entryId}`)
    .then(response => response.json())
}

// Shows all posts in date order starting with most recent

export const showEntryList = () => {
	const entryLog = document.querySelector("#entryLog");
	getJournalEntries()
		.then((response) => {
			const sortedByDate = response.sort(
				(currentEntry, nextEntry) =>
					Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
			);
			return sortedByDate;
		})
		.then((allPosts) => {
			entryLog.innerHTML = EntryListComponent(allPosts);
		});
};

// Converts post entry to JSON data and saves to journal.json

export const createEntry = entryObj => {
	return fetch("http://localhost:8088/entries", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(entryObj)

	})
		.then(response => response.json())
};

// Delete post fetch call=======================

export const deleteEntry = entryId => {
	return fetch(`http://localhost:8088/entries/${entryId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(showEntryList)
}


//Rick and Morty quote randomizer ===============================================
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