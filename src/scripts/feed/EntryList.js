import { JournalEntryComponent } from "./Entry.js"

// const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = (entries) => {

    let journalHTMLRep = "";

    for (const entry of entries) {
        journalHTMLRep += JournalEntryComponent(entry);
    };
        return journalHTMLRep;
}





