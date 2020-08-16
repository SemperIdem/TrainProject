
const modals = (state) => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        console.log('TRIGGER');
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.classList.remove('modal-close');
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
     document.body.classList.remove('modal-open');
     document.body.classList.add('modal-close'); 
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
       document.body.classList.remove('modal-open');
       document.body.classList.add('modal-close');
      }
    })
  }
  
  function showModalByTime(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden"
    }, time)
  }

  function validateModals(buttonSelector, ...props) {
    const button = document.querySelector(buttonSelector);
    console.log(props);
    button.addEventListener('click', (e) => {
      for (let i = 0; i < props.length; i++) {
        console.log("STATE " + state[props[i]]);
        if (!state.hasOwnProperty(props[i] || state[props[i]] == '')) {
          console.log("don't have");
          e.stopImmediatePropagation();
        }
      }
      console.log(props);
    }, false);
    }
  

  
    validateModals('.popup_calc_button', 'width', 'height', 'form');
    validateModals('.popup_calc_profile_button', 'profile', 'type');
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); 
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false); 
    //showModalByTime('.popup', 5000);
}

export default modals;