const photoCards = document.querySelectorAll(".photo-card");
const modal = document.getElementById("memoryModal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

photoCards.forEach(card => {
    card.addEventListener("click", () => {
        modalImg.src = card.querySelector("img").src;
        modalText.innerText = card.dataset.description || "Bu anı için henüz bir hikaye yazılmadı...";
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});
