console.log("too close for missiles, switching to guns.");

import { getJournalEntries } from "./data/DataManager.js"
import { EntryListComponent } from "./EntryList.js"

const showPostList = () => {
    const entryLog = document.querySelector("#entryLog")
    getJournalEntries().then((allPosts) => {
        entryLog.innerHTML = EntryListComponent(allPosts);
    })

}

const startJournal = () => {
    showPostList();
}

startJournal();

console.log(getJournalEntries()[1]);