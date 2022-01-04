console.log("💩");

const toggleBtn = document.querySelector(".menu-icon");
const fsMenu = document.querySelector(".fs-menu")
const closeBtn = document.querySelector(".close-icon");

toggleBtn.addEventListener("click", (event) => {
    if (fsMenu.classList.contains("hidden")) {
        fsMenu.classList.remove("hidden");
        console.log("Displaying menu now");
    }

    else {(menuBtn.classList.add("hidden"))}
});

closeBtn.addEventListener("click", (event) =>{
    fsMenu.classList.add("hidden");
})