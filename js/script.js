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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9 + 1;
   const endIndex = page * 9;
   const studentList = document.getElementsByClassName('student-list')[0];
   // studentList.insertAdjacentHTML('beforeend', attach);
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

         // let attach = `
         // <li class="student-item cf">
         //    <div class="student-details">
         //       <img class="avatar" src="${data[i].picture.medium} alt="Profile Picture">
         //       <h3>${data[i].name.first} ${data[i].name.last}</h3>
         //       <span class="email">${data[i].email}</span>
         //    </div>
         //    <div class="joined-details">
         //       <span class="date">Joined ${data[i].registered.date}</span>
         //    </div>   
         // </li>
         // `

      }
   }
}
showPage(data, 1);



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const pages = Math.ceil(list.length / 9);
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
   // loop over the number of pages needed
   // create the elements needed to display the pagination button
   // insert the above elements
   for (let i = 1; i <= pages.length + 1; i++) {
      linkList.insertAdjacentHTML('beforeend', `<li>
      <button type="button">1</button>
      </li>`);
   };
   const active = document.querySelector('button');
   active.className = "active";
   console.log(list);
   // give the first pagination button a class of "active"

   // create an event listener on the `link-list` element
   // if the click target is a button:
   // remove the "active" class from the previous button
   // add the active class to the clicked button
   // call the showPage function passing the `list` parameter and page to display as arguments
}

addPagination(data);

// Call functions
