import checkNumInputs from './checkNumInputs';

const forms = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  checkNumInputs('input[name="user_phone"]');    

  const message = {
    loading: 'Загрузка...',
    succes: 'Спасибо! С вами свяжутся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
        console.log('item ' + item.value);
        item.value = '';
    });
  };

  const clearState = () => {
    console.log('Clear State')
    console.log(state);
    for (const prop of Object.getOwnPropertyNames(state)) {
      delete state[prop];
    }
    console.log(state);
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      console.log('Send state ' + state);
      const formData = new FormData(item);
      if (item.getAttribute('data-calc') == "end") {
          for (let key in state) {
              formData.append(key, state[key]);
          }
      }

      postData('assets/server.php', formData)
          .then(res => {
              console.log(res);
              statusMessage.textContent = message.succes;
          })
          .catch(() => statusMessage.textContent = message.failure)
          .finally(() => {
              console.log('FINAL');
              clearInputs();
              clearState();
              setTimeout(() => {
                statusMessage.remove();
              },  5000);
          });
    });
  });
};

export default forms;