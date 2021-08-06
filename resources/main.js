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
    document.getElementById("preview").style.display = "unset"
}

function showImgTeaCozy() {
    document.getElementById("tea-cozy").style.display = "unset";
    document.getElementById("preview").style.display = "none"
}

excursion.onmouseover = showImgExcursion
excursion.onmouseleave = hideImgExcursion

function hideImgExcursion() {
    document.getElementById("excursion").style.display = "none"
    document.getElementById("preview").style.display = "unset"
}

function showImgExcursion() {
    document.getElementById("excursion").style.display = "unset";
    document.getElementById("preview").style.display = "none"
}

dasmoto.onmouseover = showImgDasmoto
dasmoto.onmouseleave = hideImgDasmoto

function hideImgDasmoto() {
    document.getElementById("dasmoto").style.display = "none"
    document.getElementById("preview").style.display = "unset"
}

function showImgDasmoto() {
    document.getElementById("dasmoto").style.display = "unset";
    document.getElementById("preview").style.display = "none"
}

mixedMessages.onmouseover = showImgMixedMessages
mixedMessages.onmouseleave = hideImgMixedMessages

function hideImgMixedMessages() {
    document.getElementById("mixed-messages").style.display = "none"
    document.getElementById("preview").style.display = "unset"
}

function showImgMixedMessages() {
    document.getElementById("mixed-messages").style.display = "unset";
    document.getElementById("preview").style.display = "none"
}

const darkMode = document.getElementById("dark-mode")

function changeDarkMode() {``
    if (darkMode.innerText === "Dark Mode") {
        document.body.style.backgroundColor = '#0D1117'
        let darkText = document.querySelectorAll("a, p")
        console.log(darkText)
        darkText.forEach(item => {
            item.style.color = '#C9D1D9'
        })
        let darkTextHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        darkTextHeading.forEach(item => {
            item.style.color = '#C9D1D9'
        })
        darkMode.innerText = "Light Mode"
        document.getElementById("what-i-do").style.backgroundColor = "rgb(129, 94, 28)"
    } else {
        document.body.style.backgroundColor = 'white'
        let darkText = document.querySelectorAll("a, p")
        console.log(darkText)
        darkText.forEach(item => {
            item.style.color = 'black'
        })
        let darkTextHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        darkTextHeading.forEach(item => {
            item.style.color = 'black'
        })
        darkMode.innerText = "Dark Mode"
        document.getElementById("what-i-do").style.backgroundColor = "rgb(231, 169, 54)"
    }
}

darkMode.onclick = changeDarkMode