import _ from 'lodash';
import './style.css';
import Puppy from './puppy.jpeg';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const puppyImg = new Image();
    puppyImg.src = Puppy;
  
    element.appendChild(puppyImg);
  
    return element;
  }
  
  document.body.appendChild(component());