import { showPostList } from "./data/DataManager.js"
import { eventListener } from "./EventListener.js"

const startJournal = () => {
    showPostList();
}
startJournal();
eventListener();
