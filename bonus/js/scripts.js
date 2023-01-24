const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imagesCarousel : [
          {
              image: 'img/01.webp',
              title: 'Marvel\'s Spiderman Miles Morale',
              text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          }, {
              image: 'img/02.webp',
              title: 'Ratchet & Clank: Rift Apart',
              text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          }, {
              image: 'img/03.webp',
              title: 'Fortnite',
              text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          }, {
              image: 'img/04.webp',
              title: 'Stray',
              text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          }, {
              image: 'img/05.webp',
              title: "Marvel's Avengers",
              text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
          }
        ],
        slideCurrent : 0,
        autoPlay : null ,
      }
      
    },
    methods: {
      nextClick () {
        if (this.slideCurrent == (this.imagesCarousel.length - 1)){
            this.slideCurrent = 0;
        }else{
            this.slideCurrent++;
        }
    },
    
    prevClick () {
        if (this.slideCurrent == 0){
            this.slideCurrent = (this.imagesCarousel.length - 1)
        }else{
            this.slideCurrent--;
        }
    },
    hoverStop(){
      //console.log('SONO IN HOVER');
      clearInterval(this.autoPlay);
      this.autoPlay = null;
    },
    hoverPlay(){
      //console.log('SONO FUORI HOVER');
      this.startAutoPlay();
    },
    startAutoPlay(){
      this.autoPlay = setInterval(this.nextClick,3000);
    },

    },
    mounted() {
      //console.log('Mounted ok!');
      //0=setInterval(this.nextClick,3000);
      // setInterval(this.prevClick,3000),
      this.startAutoPlay()
    },
  }).mount('#app')