<template>
    <section class="about-section">
        <div class="heading">
            <span>about us</span>
            <h3>Snack Smart, Snack Shack!</h3>
        </div>

        <div class="row">
            <div class="about-content">
                <img src="../assets/images/about-img9.jpg" alt="aboutLogo" class="slide-in-left">
                <div class="about-content-text slideInRight">
                    <p class="slide-in">Our restaurant Snack Shack was founded and designed by Jamin Joshua Langeveldt (A Software Engineer) in 2024 in South Africa. After
                        that, thanks to the support of our customers, our brand has been popularized globally in markets
                        such as Koerea, USA, Canada, UK, France, Germany, Belgium, Russia, China, Japan,
                        Singapore. The products that we deliver to customers are always very authentic and of
                        best quality.</p>
                    <p class="slide-in">Customers can eat at the restaurant to experience the South African atmosphere or can order food to be
                        delivered to their homes.</p>

                        <div class="about-img">
                         <img src="../assets/images/snack-shack-logo.png" alt="aboutImg" class="slide-in">

                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="about-article slide-in-left">
                <h3>Snack Smart <br> Snack🍜Shack</h3>
            </div>
        </div>

        <div class="row gallery">
            <div class="wrapper">
                <img src="../assets/images/taco/taco-2.jpg" alt="">
                <img src="../assets/images/taco/taco-4.jpg" alt="">
                <img src="../assets/images/burrito/burrito-6.jpg" alt="">
                <img src="../assets/images/burrito/burrito-2.jpg" alt="">
                <img src="../assets/images/burrito/burrito-3.jpg" alt="">
                <img src="../assets/images/nachos/nachos-1.jpg" alt="">
                <img src="../assets/images/nachos/nachos-2.jpg" alt="">
                <img src="../assets/images/nachos/nachos-3.jpg" alt="">
                <img src="../assets/images/dessert/dessert-2.jpg" alt="">
                <img src="../assets/images/dessert/dessert-6.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};

document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.slide-in, .slide-in-left');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    elementsToAnimate.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('slide-in-active');
      }
    });
  }

  // Handle scroll event
  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.about-section {
    padding: 2rem 9%;
}

.about-section .heading span {

  font-family: "Qwitcher Grypen", cursive;
  font-weight: 700;
  font-style: normal;
    font-size: 7rem;
    color: #ea0c0c;
}

.about-section .heading h3 {

    font-size: 2.5rem;
    padding-top: .5rem;
    color: #27ae60;
    font-weight: 800;
}

.about-section .about-content {
    display: flex;
    width: 100%;

}

.about-section .about-content img {
    background-color: rgb(249, 249, 249);
    width: 50%;
    border-radius: 5rem;

}

img[alt*="aboutLogo"] {

    box-shadow: 1rem 2rem 2rem grey;
    
}

img[alt*="aboutImg"] {

    margin-left: 5rem;
    width:80% !important;
}

.about-section .about-content .about-content-text {
    font-size: 19px;
    padding-left: 70px;
    width: 90%;
    font-weight:300;
}

.about-section .about-article {
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    width: 100%;
}

.about-section .about-article h3 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  font-size: 10rem;
  font-style: normal;
  background: linear-gradient(-45deg, #27ae60, #8b0000, #f82d2d, #130f40);
  background-clip: text; 
  -webkit-background-clip: text; 
  color: transparent; 
  animation: gradient 5s ease infinite;
  box-shadow: 1rem 2rem 2rem grey;
  border-radius: 20px;
  margin-top: 10rem;

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Keyframes for slide-in-right animation */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.slide-in-active {
  animation: slideInRight 1s forwards;
}

.slide-in-left {
  animation: slideInLeft 1s forwards;
}



.about-section .gallery {
    overflow: hidden;
    padding: 100px;
}

.about-section .gallery .wrapper {
    position: relative;
    flex-grow: 1;
    margin: auto;
    max-width: 1200px;
    max-height: 1200px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;
    
}

.about-section .gallery .wrapper img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: transform 0.29s ease-in-out;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
    grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
    z-index: 2;
    transform: scale(1.6);
}

@media (max-width: 768px) {
    .about-section .about-content img {
        width: 250px;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2.5);
    }
}

@media (max-width: 576px) {
    .about-section .about-content img {
        width: inherit;
    }

    .about-section .about-content {
        display: block;
    }

    .about-section .about-content .about-content-text {
        padding-left: 0px;
    }

    .about-section .gallery {
        padding: 50px 0px;
    }

    .about-section .gallery .wrapper img {
        max-width: 100%;

    }

    .about-section .gallery .wrapper {
        grid-gap: 2vmin;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2);
    }

}
</style>