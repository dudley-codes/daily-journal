export const eventListener = () => {

    const appElement = document.querySelector("main")

    appElement.addEventListener("click", event => {
        if(event.target.id.startsWith("submit")){
            console.log("You clicked 'submit'")
            
        } else if (event.target.id.startsWith("edit")){
            const splitID = event.target.id.split("--");
            console.log("you split the edit ID", splitID);
            
        } else if (event.target.id.startsWith("delete")){
            const splitID = event.target.id.split("--");
            console.log("you split delete ID", splitID);
        }
        }
    )
};