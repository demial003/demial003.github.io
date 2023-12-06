function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
   
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', () => {
    closeImage()
})

const images = document.querySelectorAll('.image')
console.log(images);

images.forEach(image => {
    image.addEventListener('click', (e) => {
        showImage(e.target.src)
    })
})