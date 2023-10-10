
let count = 1

document.querySelector('#radio1').checked = true

setInterval(function () {
    nextImage()
}, 1000)

function nextImage() {
    count++
    if (count > 6) {
        count = 1
    }

    document.querySelector('#radio' + count).checked = true
}

function showToast() {
    let toast = document.querySelector("#toast");

    // Mostra o toast gradualmente
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    console.log(toast)

    setTimeout(function () {
        toast.style.opacity = "0";
        toast.classList.add("hidden");
    }, 3000);
}

window.onload = showToast;








