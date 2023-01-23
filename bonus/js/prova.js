const newSlide = document.createElement('div');
newSlide.classList.add('slide');

const newInfoImage = document.createElement('div');
newInfoImage.classList.add('info-image');

const newTitle = document.createElement('h2');
newTitle.innerText = item.title;

const newText = document.createElement('p');
newText.innerText = item.text;

newInfoImage.append(newTitle);
newInfoImage.append(newText);

const newIntImage = document.createElement('div');
newIntImage.classList.add('int-image');

const newImage = document.createElement('img');
newImage.setAttribute('src',item.image) 

newIntImage.append(newImage);
newSlide.append(newIntImage);
newSlide.append(newInfoImage);
slides.append(newSlide);
console.log('newSlide',newSlide);








///////////////


after.addEventListener('click',

  function(){
    if( currentSlide < (imagesCarousel.length - 1)){
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide ++;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = 0;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
  }

)

before.addEventListener('click',

  function(){
    if(currentSlide > 0){
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide --;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      allOverlay[currentSlide].classList.remove('ms-d-none'); //overlay 2
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = imagesCarousel.length -1;
      
      allSlide[currentSlide].classList.add('active');
      allOverlay[currentSlide].classList.add('ms-d-none'); //overlay 2
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    
  }

)