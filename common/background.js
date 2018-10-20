let allElements = document.getElementsByTagName('h3');
let allElementsArray = Array.from(allElements);
let elements = allElementsArray.filter(function(element) {
	return element.parentNode.tagName == 'A';
});
if(elements.length > 0) {	  
  let count = 0;
  const handleKeyDown = count => {
    elements.forEach(function(element) {
      element.style.border = 'none';
    });
    let h3 = elements[count];
    let a = h3.parentNode;
    h3.style.border = "1px solid blue";
    a.focus();
    h3.scrollIntoView({alignToTop: true});
  };
  handleKeyDown(count);
  window.addEventListener("keydown", function(event) {	  
    if( document.getElementById('lst-ib') !== document.activeElement ) {  
      if(event.keyCode === 40 && count < elements.length-1) {
        event.preventDefault();
        count++
        handleKeyDown(count);
      } else if(event.keyCode === 38 && count > 0) {
        event.preventDefault();
        count--
        handleKeyDown(count);
      } else if(event.keyCode === 27) {
        document.getElementById('lst-ib').focus();
      }
    }
  }, true);
}
