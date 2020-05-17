const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");

for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`;
    })
}

closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
})

maximizeModal = document.querySelector(".maximize-modal").addEventListener("click", function(){

    modal.classList.toggle("maximize")
    // if (modalOverlay.classList.contains("maximize")){
    //     modalOverlay.classList.remove("maximize");
    // } else{
    //     modalOverlay.classList.add("maximize");
    // }
})