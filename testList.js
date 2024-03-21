document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const dropdownList = document.getElementById('dropdownList');
    
    const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes', 'Apple1', 'Banana1', 'Orange1', 'Pineapple1', 'Mango1', 'Grapes1'];
  
    inputField.addEventListener('input', function() {
      const userInput = inputField.value.toLowerCase();
      const matchingItems = data.filter(item => item.toLowerCase().includes(userInput));
  
      renderDropdownList(matchingItems);
    });
  
    function renderDropdownList(items) {
        dropdownList.innerHTML = '';
        if (items.length === 0) { 
          dropdownList.classList.remove('show');
          return;
        }
    
        const startIdx = items.length > 5 ? items.length - 5 : 0; // Находим начальный индекс для среза
    
        const limitedItems = items.slice(startIdx); // Берем последние 5 элементов
    
        limitedItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.addEventListener('click', function() {
            inputField.value = item;
            dropdownList.classList.remove('show');
          });
          dropdownList.appendChild(li);
        });
    
        dropdownList.classList.add('show');
    }
    
  
    document.addEventListener('click', function(event) {
      if (!dropdownList.contains(event.target) && event.target !== inputField) {
        dropdownList.classList.remove('show');
      }
    });
  });
  