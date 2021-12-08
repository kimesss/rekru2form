const btn  = document.getElementById("btn")
const tytuł = document.getElementById("tytuł")
const author = document.getElementById("author")
const select = document.getElementById("books")
const prio = document.getElementById("priorytet")
const books = document.getElementById("books-container")
const span = document.getElementById("span")



const tablica = []

const dataa = JSON.parse(localStorage.getItem('ma-data')) || {}

for (let i = 0; i <= dataa.length - 1 ; i++){
    console.log(dataa[i])
    let oldBook = document.createElement("td")
    oldBook.innerText = `autor: ${dataa[i].author} \n tyt: ${dataa[i].title} \n priorytet: ${dataa[i].prio} \n dział: ${dataa[i].selectt}`
   books.appendChild(oldBook)
    const kj = {
        author: dataa[i].author,
        title: dataa[i].title,
        prio: dataa[i].prio,
        selectt: dataa[i].selectt
    }
    tablica.push(kj)

}

let selectedValue = select.selectedOptions.item(0).value
function start(e) {

    e.preventDefault()

    if([...author.value].length < 3 || [...tytuł.value].length < 1 || prio.value === "" || parseInt(prio.value) > 5 || parseInt(prio.value) < 1)  {
        console.log([...author.value].length)
            console.log([...tytuł.value].length)
        console.log(prio.value)
        span.textContent = "Proszę podać minimum 1 znak w tytule, minimum 3 znaki w autorze i numer z przedziału od 1 do 5 w priorytecie"
        return;}

    span.textContent = ""

        selectedValue = select.selectedOptions.item(0).value
        const a = []
        a.push(`autor: ${author.value}`)
        a.push(`tyt: ${tytuł.value}`)
        a.push(`priorytet: ${prio.value}`)
        a.push(`dział: ${selectedValue}`)
        const newBook = a.join(` \r\n `)

        let book = document.createElement("td")
        book.setAttribute("class", "book")
        book.setAttribute("author", author.value)
        book.setAttribute("title", tytuł.value)
        book.setAttribute("prio", prio.value)
        book.setAttribute("sec", selectedValue)
        book.innerText = newBook
        books.appendChild(book)
        const aaa = {
            author: author.value,
            title: tytuł.value,
            prio: prio.value,
            selectt: selectedValue
        }
        tablica.push(aaa)

        author.value = ""
        tytuł.value = ""
        prio.value = ""
        selectedValue = ""
        localStorage.setItem('ma-data', JSON.stringify(tablica))
    }

btn.addEventListener("click", start)