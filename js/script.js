/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/





/*
Create a 'showPage' function and its purpose is to create a set of pages with 9 pieces of information we will input from the data.js. We will create an HTML structure and loop through the data in certain parts of our structure and then append it.   
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         studentList.insertAdjacentHTML('beforeend', `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>   
         </li>
         `);

      }
   }
}
showPage(data, 1);





/* 
Create an 'addPagination' function and its purpose is to create a pagination list that is set to the amount of data we want show on a page (9) and that'll react to a 'click' eventListener. Once clicked the page number will correspond to the next list of 9.   
*/

function addPagination(list) {
   const pages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 1; i <= pages; i++) {
      linkList.insertAdjacentHTML('beforeend', `<li>
      <button type="button">${i}</button>
      </li>`);
      const firstButton = document.getElementsByTagName('button')[0];
      firstButton.setAttribute('class', 'active');
   };

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const first = document.querySelector('.active');
         first.className = '';
         const newButton = e.target;
         newButton.className = 'active';
         showPage(list, newButton.textContent);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);
