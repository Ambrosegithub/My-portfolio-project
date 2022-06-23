// modal pop up
const buttons = document.querySelectorAll('.img-btn');
const closeModal = document.querySelector('.close');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    document.getElementById('my-modal').style.display = 'block';
  })
});
  closeModal.addEventListener('click', () => {
  document.getElementById('my-modal').style.display = 'none';
});

// storing the info in array of objects.
const projectArr = [
  { 
    image: './images/desktop7.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    secondParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    liveVersion: '#',
    sourceLink: '#'
  },
{
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#'
},
{
    image: './images/desktop3.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#'
},
{
    image: './images/desktop4.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#'
},
{
    image: './images/desktop5.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#'
},
{
    image: './images/desktop6.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1' ],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#'
}
];


/*
 const projectContainer= document.querySelector('#project-container')

const fullSectionDiv = projectArr.map((project)=>` <div class="full-section-div">
 <div id="img-div1" class="imj-project-section">
   <img id="desktop-img1a" src="${project.image}" alt="" />
 </div>
 <div id="list-of-project1" class="list-of-project">
   <h4>${project.HeadLine}</h4>
   <ul>
     ${project.language.map((list)=>`<li class="project-list-1">${list}</li>`).join('')}
        </ul>
   <div class="project-link">
     <button id="btn-hover" type="button" class="img-btn" data-id="0">
       See this project<img
         class="img-list"
         src="./images/arrow-right.png"
         alt="arrow"
       />
     </button>
   </div>
 </div>
</div>
`).join('');
projectContainer.innerHTML += fullSectionDiv;
*/
