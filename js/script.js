







/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/





function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list')
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex ) {
         const studentItem = document.createElement('li');
         
      }
   }
}

showPage(data, 3);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/




function addPagination() { 
}





// Call functions
