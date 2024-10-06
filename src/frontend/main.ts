// import 'vite/dynamic-import-polyfill'; // for prod mode
import './_framework/css/index.css';
import { createSearch } from './components/molecules/search/search.molecule';


createSearch('data-search', 'projects', '[data-project]');

const addClass = (target: string, className: string) => {
    const elements = document.querySelectorAll(target); // as NodeListOf<HTMLElement|null>;
    if(elements){
        for(const element of elements){
            element.classList.add(className);
        }
    }
}
const zoomElements = (target: string, scale: number) => {
    const elements = document.querySelectorAll(target) as NodeListOf<HTMLElement>;
    if(elements){
        for(const element of elements){
            // element.classList.add(className);
            if(element){
                element.style.transform = `scale(${scale})`;
            }
        }
    }
}
const removeClass = (target: string, className: string) => {
    const elements = document.querySelectorAll(target); // as NodeListOf<HTMLElement|null>;
    if(elements){
        for(const element of elements){
            element.classList.remove(className);
        }
    }
}
const createZoom = () => {
    const svgImages = document.querySelectorAll('.zoomable');
    let scale = 1;

    document.getElementById('zoomIn').addEventListener('click', () => {
      scale += 0.1;
      
    //   svgImages.style.transform = `scale(${scale})`;
      zoomElements('.zoomable', scale)
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
      if (scale > 0.1) {
        scale -= 0.1;
        // svgImages.style.transform = `scale(${scale})`;
        zoomElements('.zoomable', scale)
      }
    });

    document.getElementById('resetZoom').addEventListener('click', () => {
      scale = 1;
    //   svgImages.style.transform = `scale(${scale})`;
      zoomElements('.zoomable', scale)
    });
}

const createSwitchButtons = (type: string) => {
    const switchButtons = document.querySelectorAll(`.switch__button[data-type="${type}"]`);

    const targets = document.querySelectorAll(`.switch__target[data-type="${type}"]`);
        for(const target of targets){
            target.classList.add('hidden');
            const index = target.getAttribute('data-index');
            if(index === '1'){
                target.classList.remove('hidden');
            }
        }

for(const switchButton of switchButtons){
    const buttonIndex = switchButton.getAttribute('data-index')
    if(buttonIndex === '1'){
        switchButton.classList.add('active')
    }
    switchButton.addEventListener('click', (event) => {
        removeClass(`.switch__button[data-type="${type}"]`, 'active');
        switchButton.classList.add('active')
        const element = switchButton;
        const btnValue = element?.getAttribute('data-key');

        const isActive = element.classList.contains('active');
        const targets = document.querySelectorAll(`.switch__target[data-type="${type}"]`);
        for(const target of targets){
            target.classList.add('hidden');
            const value = (target as HTMLElement).getAttribute('data-key'); 
            if(value === btnValue){
                target.classList.remove('hidden')
                console.log('Acitvate; ' + value)
            } else {
            }
        }
    });
}
}

createSwitchButtons('events');
createSwitchButtons('floors');


const mapItems = document.querySelectorAll('.map__item');
const widthScreen = window.innerWidth -100;
for(const mapItem of mapItems){
    mapItem.setAttribute('style', `width: ${widthScreen}px`);
}

createZoom();