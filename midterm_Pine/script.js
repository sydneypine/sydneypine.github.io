// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/erding.jpg', 
 alt: 'germanhotel', 
 caption: 'Not a morning person, but there was something so calming about waking up to church bells at 7 am.'
},
{ src: 'images/munich.jpg', 
 alt: 'architecture', 
 caption: '"This would be a perfect spot for a Walmart" said no one ever.'
},
{ src: 'images/tulips.jpg', 
 alt: 'flowers', 
 caption: 'We have these in America, but they somehow seemed even more beautiful in Austria.'
},
{ src: 'images/nymphenburg.jpg', 
 alt: 'palace', 
 caption: 'Why did we ever stop painting murals on ceilings?'
},	
{ src: 'images/vienna.jpg', 
 alt: 'crosswalk', 
 caption: 'I was thrilled to come across casual diversity in the wild.'
},
{ src: 'images/austrian_cat.jpg', 
 alt: 'cat', 
 caption: 'Local Austrian cat was much less thrilled to see American tourists.'
},
{ src: 'images/mondsee.jpg', 
 alt: 'lake', 
 caption: 'How could a cat be so angry when this was the view outside his house?'
},
{ src: 'images/st_florian.jpg', 
 alt: 'library', 
 caption: 'I felt as if I stepped into Beauty and the Beast.'
},
{ src: 'images/salzburg.jpg', 
 alt: 'favorite', 
 caption: 'Even a year and a half later, this view still comes to me in my dreams.'
},
{ src: 'images/lock_bridge.jpg', 
 alt: 'friends', 
 caption: 'My high school friends and I are forever immortalized in my favorite city.'
}
];
let currentIndex = 0;
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
