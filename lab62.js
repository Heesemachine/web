const constructor = document.getElementById("constructor");
document.getElementById("addLots").onclick = () => {
    constructor.classList.remove("hide");
}
const constructorEdit = document.getElementById("constructorEdit");


const arrLots = [];
document.getElementById("addLotsButton").onclick = () => {
    const lotsObject = new Auction(
        document.getElementById("code").value,
        document.getElementById("name").value,
        document.getElementById("start").value,
        document.getElementById("end").value,
        document.getElementById("fprice").value,
        document.getElementById("lprice").value
    );
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("fprice").value = "";
    document.getElementById("lprice").value = "";
    arrLots.push(lotsObject);
    constructor.classList.add("hide");
    render()

}

function render() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    for (let i = 0; i < arrLots.length; i++) {
        const lotsObject = arrLots[i];
        const tr = document.createElement("tr")
        const code = createTd(lotsObject.code)
        const name = createTd(lotsObject.name)
        const start = createTd(lotsObject.start)
        const end = createTd(lotsObject.end)
        const fprice = createTd(lotsObject.fprice)
        const lprice = createTd(lotsObject.lprice)
        const buttonPlace = document.createElement("td")
        const editButton = document.createElement("button")
        editButton.innerText = "edit"
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "clear/delete"
        deleteButton.addEventListener("click", () => {
            arrLots.splice(i, 1)
            render()
        })
        editButton.addEventListener("click", () => {
            constructorEdit.classList.remove("hide")
            edit(i)
        })
        buttonPlace.appendChild(editButton)
        buttonPlace.appendChild(deleteButton)

        tr.appendChild(code)
        tr.appendChild(name)
        tr.appendChild(start)
        tr.appendChild(end)
        tr.appendChild(fprice)
        tr.appendChild(lprice)
        tr.appendChild(buttonPlace)
        tableBody.appendChild(tr)
    }

}

function createTd(name1) {
    const el = document.createElement("td")
    el.innerText = name1;
    return el;
}

function edit(i) {
    const lotsObject = arrLots[i];

    document.getElementById("code2").value = lotsObject.code
    document.getElementById("name2").value = lotsObject.name
    document.getElementById("start2").value = lotsObject.start
    document.getElementById("end2").value = lotsObject.end
    document.getElementById("fprice2").value = lotsObject.fprice
    document.getElementById("lprice2").value = lotsObject.lprice

    document.getElementById("addLotsButton2").onclick = () => {
        constructorEdit.classList.add("hide")
        lotsObject.code = document.getElementById("code2").value
        lotsObject.name = document.getElementById("name2").value
        lotsObject.start = document.getElementById("start2").value
        lotsObject.end = document.getElementById("end2").value
        lotsObject.fprice = document.getElementById("fprice2").value
        lotsObject.lprice = document.getElementById("lprice2").value
        render()
    }
}