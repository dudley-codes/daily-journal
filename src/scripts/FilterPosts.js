import { EntryListComponent } from "/scripts/feed/EntryList.js";
import { useJournalEntries } from "/scripts/data/DataManager.js"

const appElement = document.querySelector("main")

export const filterByDate = () => {

    appElement.addEventListener("change", event => {
        if (event.target.id === "sort--date") {
            const yearAsNumber = parseInt(event.target.value)
            console.log(yearAsNumber)
            console.log(`User wants to see posts since ${yearAsNumber}`)

            showFilteredPosts(yearAsNumber);
        }
    })

    const showFilteredPosts = (year) => {
        const epoch = Date.parse(`01/01/${year}`);
        console.log("The robot date is", epoch);
        const filteredData = useJournalEntries().filter(singlePost => {
            if (Date.parse(singlePost.date) >= epoch) {
                return singlePost
            }
            })
            const postElement = document.querySelector("#entryLog");
                postElement.innerHTML = EntryListComponent(filteredData);
    }
};
// sort data by mood
export const filterByMood = () => {
    appElement.addEventListener("change", event => {
        if (event.target.id === "sort--mood") {
            const currentMood = event.target.value
            console.log("currentMood", currentMood)
            showFilteredPosts(currentMood)
        }
    })

    const showFilteredPosts = (mood) => {
        const filteredMood = useJournalEntries().filter(singlePost => {
            if (singlePost.mood === mood) {
                return singlePost
            } 
        })
        const postElement = document.querySelector("#entryLog");
            postElement.innerHTML = EntryListComponent(filteredMood)
    }
}