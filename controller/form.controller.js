export class FormController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }
  changeAnimal(el) {
    let element = el.target.parentElement.parentElement.parentElement;
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].style.display = '';  
    }
    if (el.target.value === 'dog') {
      element.children[4].style.display = 'none';
    }else if(el.target.value === 'hamster'){
      element.children[3].style.display = 'none';
      element.children[3].lastElementChild.firstElementChild.value = '';
    }
  }
  

  sendData(sel1,inp1,inp2,inp3){
    let button = this.parent.querySelector('button.btn-primary');
    button.removeAttribute('data-send');
    let item;
    switch (sel1.value) {
        case 'dog':
        if(!this.isValid(inp1) || !this.isValid(inp2, false) || !this.isValid(inp3)){
          return;
        }
        break;
      case 'cat':
        if(!this.isValid(inp1) || !this.isValid(inp2, false) || !this.isValid(inp3)){
          return;
        }
        break;
      case 'hamster':
        if(!this.isValid(inp1) || !this.isValid(inp2, false)){
          return;
        }
        break;
    }
    button.setAttribute('data-send','data');
    return item;
  }

  isValid(element, patrn = true){
    let tmpValue;
    let pattern = patrn ? /^[a-z]+-?([a-z]+)?$/i : /^\d+(\.\d{0,2})?$/;
    if(element.value !== '' && pattern.test(element.value)){
      return true;
    }else {
      element.style.border = '3px solid red';
      element.style.color = 'red';
      tmpValue = element.value;
      element.value = ' PLEASE, FILL THIS FIELD CORRECTLY!';
      setTimeout(() => {
        element.style.border = '';
        element.style.color = '';
        element.value = tmpValue;
      }, 2000);
      return false;
    }
  }

  closeForm(){
    this.parent.innerHTML = '';
  }
}