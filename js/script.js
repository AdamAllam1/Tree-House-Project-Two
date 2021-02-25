

/** Shows 9 students on the page */

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex ) {
         const studentItem = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src='${data[i].picture.large}' alt="Profile Picture">
           <h3>${data[i].name.first}</h3>
           <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${data[i].registered.date}</span>
         </div>
       </li>`;
       studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}


/** Adds the Pagination buttons */

function addPagination(list) { 
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 1; i <=numOfPages; i++) {
      let button =  `<li><button type='button'>${i}</button></li>`
      linkList.insertAdjacentHTML('beforeend', button);
      document.querySelector('button').className = 'active';
   }
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   })
}


/** calls both functions */

showPage(data, 1);
addPagination(data);