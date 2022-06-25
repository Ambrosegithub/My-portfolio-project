// modal pop up

const projectArr = [
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    secondParagraph:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph:
      'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph:
      'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph:
      'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph:
      'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph:
      'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
    next: 'next project &nbsp &#8594;',
    prev: '&#8592; &nbsp previous project',
  },
];

// project section
const projectSection = document.querySelector('#project-sections');
projectSection.innerHTML += `<div id="project-container" class="workpage">
<div class="full-section-div">
  <div id="img-div1" class="imj-project-section">
    <img id="desktop-img1a" src="./images/image_dots.png" alt="" />
    <img id="full-section-div1" src="./images/desktop7.png" alt="" /> 
  </div>
  <div id="list-of-project1" class="list-of-project">
    <h4>Project names goes here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>
    <div class="project-link">
      <button id="btn-hover" type="button" class="img-btn" id="img-btn" data-id="0">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</div>
<div class="full-section-div fix">
  <div id="img-div2" class="imj-project-section">
    <img id="full-section-div2" src="./images/desktop2.png" alt="" />
    <img id="list-of-project2-img" src="./images/desktop5.png" alt="" />
    <img
      id="list-of-project2-imgb"
      src="./images/Group-83-copy.png"
      alt=""
    />
  </div>
  <div id="list-of-project2" class="list-of-project">
    <h4>Project names goes here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>
    <div class="project-link">
      <button type="button" class="img-btn" id="img-btn" data-id="1">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</div>
<div class="full-section-div">
  <div id="img-div3" class="imj-project-section">
    <img id="full-section-div3" src="./images/desktop3.png" alt="" />
    <img src="./images/image-geometry5c.png" alt="" id="desktop-imgA" />
    <img
      id="desktop-img3"
      src="./images/image-geometry_4-1.png"
      alt=""/>
  </div>
  <div id="list-of-project3" class="list-of-project">
    <h4>Project names goes here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>
    <div class="project-link">
      <button type="button" class="img-btn" id="img-btn" data-id="2">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</div>
<div class="full-section-div">
  <div class="imj-project-section">
    <img id="destop-img4" src="./images/Shape1b.png" alt="" />
    <img id="full-section-div4" src="./images/Desktop4.png" alt="" />
  </div>
  <div id="list-of-project4" class="list-of-project">
    <h4>Project names goes here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>  <div class="project-link">
      <button type="button" class="img-btn" id="img-btn" data-id="3">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</div>
<div class="full-section-div">
  <div id="imj-project-section" class="imj-project-section">
    <img
      id="full-section-div5"
      src="./images/Rectangle-26.svg"
      alt=""
    />
  </div>
  <div id="list-of-project5" class="list-of-project">
    <h4>Project names goes here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>    <div class="project-link">
      <button type="button" class="img-btn" id="img-btn" data-id="4">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"/>
      </button>
    </div>
  </div>
</div>
<div class="full-section-div">
  <div id="img-div5" class="imj-project-section">
    <img id="full-section-div6" src="./images/desktop6.png" alt="" />
  </div>
  <div id="list-of-project6" class="list-of-project">
    <h4>Project names here</h4>
    <div class="project-listItems">
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    </div>
    <div class="project-link">
      <button type="button" class="img-btn" id="img-btn" data-id="5">
        See this project<img class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"/>
      </button>
    </div>
    <img
      id="img-geo"
      src="./images/image-geometry5c.png"
      alt="my last img"/>
  </div>
</div>
</div>`;
const buttons = document.querySelectorAll('.img-btn');
const closeModal = document.querySelector('.close');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('my-modal').style.display = 'block';
  });
});
closeModal.addEventListener('click', () => {
  document.getElementById('my-modal').style.display = 'none';
});

const modalContainer = document.querySelector('.modal-container');

for (let i = 0; i < projectArr.length; i += 1) {
  modalContainer.innerHTML = `
  <div class="modal-list">
  <h2>${projectArr[i].HeadLine}</h2>
  <ul>
  
      <li><a href="#">HTML/CSS</a></li>
      <li><a href="#">Ruby on Rails</a></li>
      <li><a href="#">Javascript</a></li>
    </ul>
</div>
<div class="modal-img">
  <div class="">
    <img
      id="desktop1"
      src="${projectArr[i].image}"
      alt="${projectArr[i].HeadLine}"
    />
  </div>
  <div class="small-img">
    <img id="desk1" src="${projectArr[i].image}" alt="modal-image" />
    <img id="desk1" src="${projectArr[i].image}" alt="modal-image" />
    <img id="desk1" src="${projectArr[i].image}" alt="modal-image" />
    <img id="desk1" src="${projectArr[i].image}" alt="modal-image" />
    <img id="desk1" src="${projectArr[i].image}" alt="modal-image" />
  </div>
  <div></div>
</div>
<div class="modal-para">
  <p>${projectArr[i].firstParagraph}</p>
  <p>${projectArr[i].secondParagraph}</p>
</div>
<div class="modal-btn">
  <button type="button" id="modal-btn1">${projectArr[i].liveVersion}</p>
  <img id="cross-img4" src="./images/Union8.png" alt="" />
  </button>
  <button type="button" id="modal-btn2">${projectArr[i].sourceLink}</p>
  <img
      id="cross-img3"
      src="./images/Vector1.png"
      alt=""
    />
  </button>
</div>
<div class="modal-link">
  <a href="" class="prev">${projectArr[i].prev}</a>
  <a href="" class="next">${projectArr[i].next}</a>
</div>
`;
}
