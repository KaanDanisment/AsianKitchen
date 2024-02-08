import { menu } from "./app.js"

createButtons()
createMenu("All")

function createButtons(){
    const categoriesSet = new Set();
    menu.forEach(item => categoriesSet.add(item.category))
    
    let buttonContainer = document.querySelector(".btn-container")
    let allButton = document.createElement("button")
    allButton.textContent = "All"
    allButton.addEventListener("click",() => createMenu("All"))
    allButton.classList.add("btn","btn-outline-dark","btn-item")
    buttonContainer.append(allButton)

    categoriesSet.forEach(category => {
        const button = document.createElement("button")
        button.textContent = category
        button.classList.add("btn","btn-outline-dark","btn-item")
        button.id = category
        button.addEventListener("click",() => createMenu(button.id))
        buttonContainer.append(button)        
    })
}

function createMenu(id) {
    let section = document.querySelector("#menu")
    section.innerHTML = "";
    if(id == "All"){
        menu.forEach(item => {
            let menuItem = createMenuItem(item);
            section.appendChild(menuItem);
        })
    }else{
        let list = menu.filter(function (item){
            return item.category == id
        })
        list.forEach(item => {
            let menuItem = createMenuItem(item)
            section.appendChild(menuItem)
        })
    }
}

function createMenuItem(item) {
    let menuItem = document.createElement("div")
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12")
    let image = document.createElement("img")
    image.classList.add("photo")
    menuItem.appendChild(image)
    let menuInfo = document.createElement("div")
    menuInfo.classList.add("menu-info")
    menuItem.appendChild(menuInfo)
    let menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")
    menuInfo.appendChild(menuTitle)
    let title = document.createElement("h4")
    let price = document.createElement("h4")
    menuTitle.appendChild(title)
    menuTitle.appendChild(price)
    let menuText = document.createElement("div")
    menuText.classList.add("menu-text")
    menuInfo.appendChild(menuText)

    image.src = item.img
    title.textContent = item.title
    price.textContent = item.price
    menuText.textContent = item.desc

    return menuItem;
}