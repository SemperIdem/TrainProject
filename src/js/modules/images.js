const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');
  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
        document.body.style.height = '100%';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
        bigImage.setAttribute('width', 600);
        bigImage.setAttribute('height', 600);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto'; 
    }
  })
};

export default images;