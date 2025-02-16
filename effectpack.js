//Modal Lightbox for images
function openModal(image){
	const modal = document.getElementById("imageModal");
	const modalImage = document.getElementById("modalImage");
	const caption = document.getElementById("caption");

	modal.style.display = "block";
	modalImage.src = image.src;
	caption.textContent = image.alt;
}

function closeModal(){
	const modal = document.getElementById("imageModal");
	modal.style.display = "none";
}

//Modal Lightbox for videos
function openVideoModal(video){
	const modal = document.getElementById("videoModal");
	const modalVideo = document.getElementById("modalVideo");

	modal.style.display = "block";
	modalVideo.src = video.querySelector("source").src;
	modalVideo.play();
}

function closeVideoModal(){
	const modal = document.getElementById("videoModal");
	const modalVideo = document.getElementById("modalVideo");

	modal.style.display = "none";
	modalVideo.pause();
	modalVideo.src = "";
}