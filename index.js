
let count = 0


let t = document.createElement("title")
t.innerHTML = "Counter"
document.head.appendChild(t)


function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}