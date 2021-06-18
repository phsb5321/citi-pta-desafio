// BOTTÕES DE MUDANÇA DE COR
const cores = document.querySelectorAll(".button")

const header = document.getElementsByClassName("header")[0]
const footer = document.getElementsByClassName("footer")[0]

const headerColors = ["738BFB", "FF99C3", "F37E55"]
const footerColors = ["9DAEFD", "F9C7BE", "F6A588"]

const picoles = document.querySelectorAll(".padding")

for (let i = 0; i < 3; i++) {
    cores[i].addEventListener("click", () => {
        header.style.cssText = `background: linear-gradient(180deg, #${headerColors[i]} 40%, rgba(255, 255, 255, 0.12) 100%);`
        footer.style.cssText = `background: #${footerColors[i]};`

        for (let j = 0; j < 3; j++) {
            picoles[j].style.cssText = "margin-top: 0;"
        }

        picoles[i].style.cssText = "margin-top: -0.5rem;"

    })
}


// TOGGLE ON & OFF DA SEARCH BAR
document.addEventListener("click", (event) => {
    const searchBar = document.querySelector(".searchBar")
    const inputForm = document.querySelector(".txt-pesquisa")
    const lupa = document.getElementById("lupa")

    if (window.screen.width <= 800) {
        if (event.target.parentNode == searchBar || event.target == lupa) {
            inputForm.style.cssText = "display: block; font-size: 12px; width: auto;"
            searchBar.style.cssText = "width: auto; padding: 1rem;"
        } else {
            inputForm.style.cssText = "display: none;"
        }
    } else {
        searchBar.style.cssText = "width: auto; padding: 1rem;"
        inputForm.style.cssText = "display: block;"
    }

});

// SEARCH BAR MECHANISM
const boxes = document.querySelectorAll(".box")
const inputForm = document.querySelector(".txt-pesquisa")
inputForm.addEventListener("keyup", (event) => {
    const nome = event.target.value.toLowerCase();
    const boxesList = Array.from(boxes);
    for (let i = 0; i < boxesList.length; i++) {
        if (!boxesList[i].id.includes(nome)) {
            boxesList[i].style.cssText = "display: none;"
        } else {
            boxesList[i].style.cssText = "display: auto;"
        }
    }
})