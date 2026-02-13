const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
});

function playMusic() {
    document.getElementById("song").play();
}

function forgive() {
    fetch("/forgive")
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = data.message;
        });
}
