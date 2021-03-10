import { showPostList } from "./data/DataManager.js"
import { eventListener } from "./EventListener.js"
import { filterByDate, filterByMood } from "./FilterPosts.js"

eventListener();
showPostList();
filterByDate();
filterByMood();
