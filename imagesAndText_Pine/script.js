// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/ph9.27.jpg', 
 alt: 'acatoberfest', 
 caption: 'Passion, a Heartful Performance'
},
{ src: 'images/image02.jpg', 
 alt: 'second', 
 caption: '2nd bit of text'
},
{ src: 'images/image03.jpg', 
 alt: 'third', 
 caption: 'last bit of text which is longer than the others to show line breaks'
}
{ src: 'image/btsimg1.JPG', 
 alt: 'fourth', 
 caption: 'behind the scenes 1'
}	
{ src: 'images/btsimg2.JPG', 
 alt: 'fifth', 
 caption: 'behind the scenes 2'
}
];let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption;
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);// Helper to show slide
