const container = document.getElementById("container")
const cardLength = 16;
const cards = []

let previewShovcard = undefined

let icons = [
    "fa-book",
    "fa-trash",
    "fa-pen",
    "fa-phone",
    "fa-home",
    "fa-moon",
    "fa-sun",
    "fa-earth",
]

icons.push(...icons)

// for(let i = 0; i < 100; i++){
//     const index1 = Math.floor(Math.random() * icons.length)
//     const index2 = Math.floor(Math.random() * icons.length)
   
//     const temp = icons[index1]
//     icons[index1] = icons[index2]
//     icons[index2] = temp
// }

for(let i = 0; i < cardLength; i++) {
    let cardEle = document.createElement("div")
    cardEle.classList.add("card")

    cardEle.innerHTML = `
        <div class = "front">
            <i class = "fa-solid ${icons[i]}"></i>
        </div>

        <div class = "back">
            <small>Click me</small>
        </div>
    `
    container.append(cardEle)

    cardEle.addEventListener("click" , () => {
        if(!cardEle.classList.contains("show")){
            cardEle.classList.add("show")
        }


        if(previewShovcard == undefined){
            previewShovcard = cardEle
        }else {
            let firstClick = previewShovcard.querySelector("i").classList[1]
            let secondClick = cardEle.querySelector("i").classList[1]

            if(firstClick !== secondClick){
                let temp = previewShovcard

                setTimeout(() => {
                    temp.classList.remove("show")
                    cardEle.classList.remove("show")
                },  1000)
            }

            previewShovcard = undefined
        }
    })
}