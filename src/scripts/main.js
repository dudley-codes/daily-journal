//     _            _ _                             _
//  __| |_    _  __| | |  ___ _   _   ___ ___    __| | ___  ___
// /  _` | | | |/ _` | |/ _ \ | | |  / __/ _ \ / _`  |/ _ \/ __|
// | (_| | |_| | (_| | |  __/ |_| | | (_| (_) | (_|  |  __/\__ \
//  \__,_|\__,_|\__,_|_|\___|\__, |  \___\___/ \__,_ |\___||___/
//                            |___/

import { showEntryList } from "./data/DataManager.js"
import { eventListener, formClear, formSubmit } from "./EventListener.js"
import { filterByDate, filterByMood } from "./FilterPosts.js"
import { showForm } from "/scripts/feed/EntryForm.js"

eventListener();
showEntryList();
filterByDate();
filterByMood();
showForm();
formClear();
formSubmit();