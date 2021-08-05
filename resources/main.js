const companyText = document.getElementById('company-text')
const teaCozy = document.getElementById('tea-cozy-text')
const excursion = document.getElementById('excursion-text')
const dasmoto = document.getElementById('dasmoto-text')
const mixedMessages = document.getElementById('mixed-messages-text')

companyText.onmouseover = showImgCompany
companyText.onmouseleave = hideImgCompany

function hideImgCompany() {
    document.getElementById("company").style.display = "none"
    document.getElementById("preview").style.display = "unset"
}

function showImgCompany() {
    document.getElementById("company").style.display = "unset";
    document.getElementById("preview").style.display = "none"
}

teaCozy.onmouseover = showImgTeaCozy
teaCozy.onmouseleave = hideImgTeaCozy

function hideImgTeaCozy() {
    document.getElementById("tea-cozy").style.display = "none"
}

function showImgTeaCozy() {
    document.getElementById("tea-cozy").style.display = "unset";
}

excursion.onmouseover = showImgExcursion
excursion.onmouseleave = hideImgExcursion

function hideImgExcursion() {
    document.getElementById("excursion").style.display = "none"
}

function showImgExcursion() {
    document.getElementById("excursion").style.display = "unset";
}

dasmoto.onmouseover = showImgDasmoto
dasmoto.onmouseleave = hideImgDasmoto

function hideImgDasmoto() {
    document.getElementById("dasmoto").style.display = "none"
}

function showImgDasmoto() {
    document.getElementById("dasmoto").style.display = "unset";
}

mixedMessages.onmouseover = showImgMixedMessages
mixedMessages.onmouseleave = hideImgMixedMessages

function hideImgMixedMessages() {
    document.getElementById("mixed-messages").style.display = "none"
}

function showImgMixedMessages() {
    document.getElementById("mixed-messages").style.display = "unset";
}

const darkMode = document.getElementById("dark-mode")

function changeDarkMode() {``
    if (darkMode.innerText === "Dark Mode") {
        document.body.style.backgroundColor = '#0D1117'
        let darkText = document.querySelectorAll("a")
        console.log(darkText)
        darkText.forEach(item => {
            item.style.color = 'white'
        })
        let darkTextHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        darkTextHeading.forEach(item => {
            item.style.color = 'white'
        })
        darkMode.innerText = "Light Mode"
    } else {
        document.body.style.backgroundColor = 'white'
        let darkText = document.querySelectorAll("a")
        console.log(darkText)
        darkText.forEach(item => {
            item.style.color = 'black'
        })
        let darkTextHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        darkTextHeading.forEach(item => {
            item.style.color = 'black'
        })
        darkMode.innerText = "Dark Mode"
    }
}

darkMode.onclick = changeDarkMode