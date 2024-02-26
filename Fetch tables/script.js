const table = document.getElementById("table")
const thead = document.getElementById("thead")
const tbody = document.getElementById("tbody")
const theadtr = document.getElementById("theadtr")

fetch(`https://northwind.vercel.app/api/products`).then(item => item.json()).then(data => {
    for (const key in data[0]) {
        const th = document.createElement("th")
        th.innerHTML = (key)
        theadtr.append(th)
    }
    data.forEach(element => {
        const tr = document.createElement("tr")
        for (const key in element) {
            const td = document.createElement("td")
            td.innerHTML = element[key]
            tr.append(td)
        }
        tbody.append(tr)
    });
})