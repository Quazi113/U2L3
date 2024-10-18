
let count = 0
let pre_count = 0;

let t = document.createElement("title")
t.innerHTML = "Counter"
document.head.appendChild(t)


function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}

function save() {
    document.getElementById("entries").innerHTML += count + "-"
    if (pre_count != 0) {
    let percent = Math.round((count - pre_count) / pre_count * 10000) / 100
    document.getElementById("percent").innerHTML = "Percent Increase from Last Entry: " + percent + "%"
    }
    pre_count = count;
}

function reset() {
    count = 0
    pre_count=0
    document.getElementById("entries").innerHTML = "Previous entries: "
    document.getElementById("count-el").innerText = count
    document.getElementById("percent").innerHTML = "Percent Increase from Last Entry: 0%"
}

