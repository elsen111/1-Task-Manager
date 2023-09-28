// Removing default active button for small screen devices in tabs section
window.addEventListener('load', () => {
    if(window.innerWidth < 768) {
      const activeBtn = document.querySelector('.buttons-container > .pointer > button.active-tab');
      activeBtn.classList.remove('active-tab');
    }
  })
  
  
  
  
  // To control change of tabs in Add section
  const handleTab = (event) => {
      const btnElements = document.querySelectorAll('.buttons-container > div > button');
  
    if(window.innerWidth > 768) {
      tabForLargerScreens(btnElements);
    } else {
      tabForSmallerScreens(btnElements)
    }
  }
  
  
  
  
  
  const tabForLargerScreens = (clickElements) => {
    const sectionElements = document.querySelectorAll('.sections-container > .section-row');
  
    for(let element of clickElements) {
      if((event.target.id !== element.id)  &&  (element.classList.contains('active-tab'))) {
        element.classList.remove('active-tab');
      }
    }
  
    for(let tabElement of sectionElements) {
      if(!(tabElement.classList.contains('d-none'))) {
        tabElement.classList.add('d-none');
        // tabElement.parentElement.removeChild(tabElement);
      }
    }
     
  
    event.target.classList.add('active-tab');
    event.target.parentElement.classList.add('active-tab');
    event.target.parentElement.querySelector('h6').classList.add('f-darkGray');
  
    if(event.target.id === '1'  ||  event.target.parentElement.id === '1') {
      document.querySelector('#add  .section-row.tasks').classList.remove('d-none');
      event.target.id === '1'
            ?  event.target.classList.add('bg_purple')
            :  event.target.parentElement.classList.add('bg_purple')
    } else if(event.target.id === '2'  ||  event.target.parentElement.id === '2') {
      document.querySelector('#add  .section-row.docs').classList.remove('d-none');
      event.target.id === '2'
            ? event.target.classList.add('bg_red')
            : event.target.parentElement.classList.add('bg_red')
    } else if(event.target.id === '3'  ||  event.target.parentElement.id === '3') {
      document.querySelector('#add  .section-row.notes').classList.remove('d-none');
      event.target.id === '3'
            ? event.target.classList.add('bg_blue')
            : event.target.parentElement.classList.add('bg_blue')
    } 
  }
  
  
  
  
  
  const tabForSmallerScreens = (clickElements) => {
    const sectionElements = document.querySelectorAll('.buttons-container > .pointer > .section-row');
    const containerElement = document.querySelector('.sections-container');
    let copyElement;
    let currentElement;
  
    for(let element of clickElements) {
      if((event.target.id !== element.id)  &&  (element.classList.contains('active-tab'))) {
        element.classList.remove('active-tab');
      }
    }
  
    // if(sectionElements.length != 0) {
    //   for(let tabElement of sectionElements) {
    //     if(!(tabElement.classList.contains('d-none'))) {
    //       tabElement.classList.add('d-none');
    //     }
    //   }
    // }
     
  
    event.target.classList.add('active-tab');
    event.target.parentElement.classList.add('active-tab');
    event.target.parentElement.querySelector('h6').classList.add('f-darkGray');
  
    if(event.target.id === '1'  ||  event.target.parentElement.id === '1') {
      currentElement = document.querySelector('#add  .section-row.tasks');
      copyElement = currentElement;
      // if(containerElement.)
      containerElement.removeChild(currentElement);
      copyElement.classList.remove('d-none');
      copyElement.classList.add('active-tab');
      console.log(sectionElements);
  
      if(event.target.id === '1') {
        event.target.parentElement.insertAdjacentElement('afterend', copyElement);
      } else {
        event.target.parentElement.parentElement.insertAdjacentElement('afterend', copyElement);
      }
  
      event.target.id === '1'
            ?  event.target.classList.add('bg_purple')
            :  event.target.parentElement.classList.add('bg_purple')
    } else if(event.target.id === '2'  ||  event.target.parentElement.id === '2') {
      currentElement = document.querySelector('#add  .section-row.docs');
      copyElement = currentElement;
      containerElement.removeChild(currentElement);
      copyElement.classList.remove('d-none');
      copyElement.classList.add('active-tab');
      console.log(copyElement);
  
      if(event.target.id === '2') {
        event.target.parentElement.insertAdjacentElement('afterend', copyElement);
      } else {
        event.target.parentElement.parentElement.insertAdjacentElement('afterend', copyElement);
      }
  
      event.target.id === '2'
            ? event.target.classList.add('bg_red')
            : event.target.parentElement.classList.add('bg_red')
    } else if(event.target.id === '3'  ||  event.target.parentElement.id === '3') {
      currentElement = document.querySelector('#add  .section-row.notes');
      copyElement = currentElement;
      containerElement.removeChild(currentElement);
      copyElement.classList.remove('d-none');
      copyElement.classList.add('active-tab');
      console.log(copyElement);
  
      if(event.target.id === '3') {
        event.target.parentElement.insertAdjacentElement('afterend', copyElement);
      } else {
        event.target.parentElement.parentElement.insertAdjacentElement('afterend', copyElement);
      }
      
      event.target.id === '3'
            ? event.target.classList.add('bg_blue')
            : event.target.parentElement.classList.add('bg_blue')
    } 
  }