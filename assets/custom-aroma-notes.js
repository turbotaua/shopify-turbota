function removeBracketsAndQuotes() {
      
      const noteLists = document.querySelectorAll('.aroma-note-values');
      
      noteLists.forEach(list => {
        const items = list.querySelectorAll('li');
        const updatedItems = Array.from(items).map(li => {
          let text = li.textContent.trim();
          
          text = text.replace(/[\[\]\"\'\s]+/g, '');
          return text;
        });
        
       
        list.innerHTML = updatedItems.map(text => `<li>${text}</li>`).join('');
      });
    }

   
    window.addEventListener('load', removeBracketsAndQuotes);