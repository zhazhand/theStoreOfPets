export class Helper {
  average(arr) {
    let len = arr.length,
        sum = 0;
    for (let i = 0; i < len; i++) {
        sum += parseFloat(arr[i].price);
    }
    return sum / len;
  }

  findIndex(arr, element){
    let index;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if(item.id === element.id){
        index = i;
      }
    }
    return index;
  }

  createInput(plchd, elId){
    let element = document.createElement('input');
    element.classList.add('form-control');
    element.setAttribute('placeholder',plchd);
    element.setAttribute('id',elId);
    return element;
  }

  createBlock(forAttr, str){
    let element = document.createElement('div');
    element.setAttribute('class','form-group row');
    let label = document.createElement('label');
    label.setAttribute('class','col-3 offset-1 control-label');
    label.setAttribute('for',forAttr);
    label.innerHTML = `${str}<span class="text-danger">*<span>`;
    element.appendChild(label);
    let div = document.createElement('div');
    div.classList.add('col-5');
    element.appendChild(div);
    return element;   
  }

  createSelect(elId, str1, str2, str3){
    let element = document.createElement('select');
    element.classList.add('form-control');
    element.setAttribute('id',elId);
    let option1 = document.createElement('option');
    option1.value = str1;
    option1.innerText = str1.toUpperCase();
    element.appendChild(option1);
    let option2 = document.createElement('option');
    option2.value = str2;
    option2.innerText = str2.toUpperCase();
    element.appendChild(option2);
    let option3 = document.createElement('option');
    option3.value = str3;
    option3.innerText = str3.toUpperCase();
    element.appendChild(option3);
    return element;
  }
}
 