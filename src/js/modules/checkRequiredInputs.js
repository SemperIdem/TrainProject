const checkRequiredInputs = () => {
  const reqInputs = document.querySelectorAll("[required]");
  reqInputs.forEach(input => {
    if (input.value == '') {
      return false;
    }
  return true;
  })
}

export default checkRequiredInputs;