// modal pop up

const projectArr = [
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    firstParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    secondParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!',
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1'],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1'],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1'],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1'],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    image: './images/desktop2.png',
    HeadLine: 'Project name goes here',
    language: ['HTML/CSS', 'Ruby on Rails', 'Javascript', '+1'],
    firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus placeat aliquam modi eveniet officia recusandae pariatur, porro eius quod.',
    secondParagraph: 'Minima fuga ex natus unde nostrum excepturi similique deserunt, ipsum quisquam! Voluptates aperiam, autem ex delectus eius aspernatur alias veritatis voluptatem!',
    liveVersion: 'see live',
    sourceLink: 'see source',
  },
];


// project section
const projectSection = document.querySelector('#project-sections')
projectSection.innerHTML += `<div id="project-container" class="workpage">
<div class="full-section-div">
  <div id="img-div1" class="imj-project-section">
    <img id="desktop-img1a" src="./images/image_dots.png" alt="" />
    <img id="full-section-div1" src="./images/desktop7.png" alt="" /> 
  </div>
  <div id="list-of-project1" class="list-of-project">
    <h4>Project names goes here</h4>
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
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
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    <div class="project-link">
      <button type="button" class="img-btn" data-id="1">
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
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    <div class="project-link">
      <button type="button" class="img-btn" data-id="2">
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
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
    </ul>
    <div class="project-link">
      <button type="button" class="img-btn" data-id="3">
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
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>

      <li class="project-list-4">+1</li>
    </ul>
    <div class="project-link">
      <button type="button" class="img-btn" data-id="4">
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
    <ul>
      <li class="project-list-1">HTML/CSS</li>
      <li class="project-list-2">Ruby on Rails</li>
      <li class="project-list-3">Javascricpt</li>
      <li class="project-list-4">+1</li>
    </ul>
    <div class="project-link">
      <button type="button" class="img-btn" data-id="5">
        See this project<img
          class="img-list"
          src="./images/arrow-right.png"
          alt="arrow"
        />
      </button>
    </div>
    <img
      id="img-geo"
      src="./images/image-geometry5c.png"
      alt="my last img"/>
  </div>
</div>
</div>`;

/*
<div class="modal-headline">
      <span class="close">&times;</span>
      <h2>project  name goes here</h2></div>
    <div class="modal-list">
      <ul>
        <li><a href="#">HTML/CSS</a></li>
        <li><a href="#">Ruby on Rails</a></li>
        <li><a href="#">Javascript</a></li>
      </ul>
    </div>
    <div class="modal-img">
      <div class="" >
        <img id="desktop1" src="./images/desktop2.png" alt="modal-image"></div>
      <div class="small-img">
        <img id="desk1" src="./images/desktop2.png" alt="modal-image">
        <img id="desk2" src="./images/desktop2.png" alt="modal-image">
        <img id="desk3" src="./images/desktop2.png" alt="modal-image">
        <img id="desk4" src="./images/desktop2.png" alt="modal-image">
        <img id="desk5" src="./images/desktop2.png" alt="modal-image">
      </div>
     <div>
      </div>
    </div>
    <div class="modal-para">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam provident explicabo velit. Laboriosam ipsa veritatis ipsam asperiores nulla distinctio doloribus atque nobis sed recusandae. Necessitatibus ipsam veniam dolorem sapiente!</p>
      <p> Minima odio nisi animi at praesentium quos odit possimus reprehenderit repellat, ipsam saepe est assumenda fugiat qui deleniti sed similique nam tenetur harum quisquam ducimus. Similique eum ab deserunt voluptatibus?</p>
    </div>
    <div class="modal-btn">
      <button type="button" id="modal-btn1">see live <img id="cross-img4" src="./images/Union8.png" alt=""></button>
      <button type="button" id="modal-btn2">see source<img id ="cross-img3" src="./images/Vector1.png" alt=""></button>
    </div>
    <div class="modal-link">
      <a href=""> &#8592;  <span>previous project</span></a>
     <a href="">next project <span>&#8594;</span> </a>
   </div>*/

   const modal = document.querySelector('.modal')
   modal.classList.add('modal');
   modal.id = 'my-modal';
   modal.appendChild(modalContent);
   const headTag = document.createElement('div');
   headTag.classlist.add('modal-headline');
   headTag.appendChild(exitBtn);
   const exitBtn = document.createElement('span');
    exitBtn.classList.add('.close');
    exitBtn.innerText= '&#times';
    const h = document.createElement('h2');
    modalContent.appendChild(h);
    modalContent.appendChild(h);
    modalContent.appendChild(headTag);
    headTag.appendChild(h);
   h.textContent = projectArr[0].HeadLine;

   const divList =document.createElement('div');
   divList.classList.add('modal-list');
   modalContent.appendChild(divList);
   const unOrderList = document.createElement('ul');
   divList.appendChild(unOrderList);
   const listItems = document.createElement('li');
   unOrderList.appendChild(listItems);
   const link = document.createElement('a');
   link.innerText=`${projectArr[0].language}`;
   listItems.appendChild(link);
   const modalImages= document.createElement('div');
   modalImages.classList.add('.modal-img');
   modalContent.appendChild(modalImages);
   const bgDesk = document.createElement('div');
   const image = document.createElement('img');
   modalImages.appendChild(bgDesk);
   bgDesk.id = 'desktop1';
   bgDesk.appendChild(image);
   image.setAttribute('src', `${projectArr[1].image}`);
   const smDiv = document.createElement('div');
   smDiv.classList.add('small-img');
   modalImages.appendChild(smDiv);
   const desk1 = document.createElement('img')
   desk1.id = 'desk1';
   desk1.setAttribute('src', `${projectArr[2].image}`);
   smDiv.appendChild(desk1);
  const desk2 = document.createElement('img')
   desk2.id = 'desk2';
   desk1.setAttribute('src', `${projectArr[3].image}`);
   smDiv.appendChild(desk2);
  const desk3 = document.createElement('img')
   desk3.id = 'desk3';
   desk3.setAttribute('src', `${projectArr[4].image}`);
   smDiv.appendChild(desk3);
  const desk4 = document.createElement('img')
  desk4.id = 'desk4';
  desk4.setAttribute('src', `${projectArr[5].image}`);
  smDiv.appendChild(desk4);
 const desk5 = document.createElement('img')
   desk5.id = 'desk5';
   desk1.setAttribute('src', `${projectArr[2].image}`);
   smDiv.appendChild(desk5);

   const modalDescription = document.createElement('div');
   modalDescription.classList.add('.modal-para');
   modalContent.appendChild(modalDescription);
   const para1 = document.createElement('p');
   para1.classList.add('.modal-para');
   para1.innerText= `${projectArr[2].firstParagraph}`;
   modalDescription.appendChild(para1);
   const para12 = document.createElement('p');
   para1.classList.add('.modal-para');
   para1.innerText= `${projectArr[3].secondParagraph}`;
   modalDescription.appendChild(para2);
   const modalButtons = document.createElement('div');
   modalButtons.classList.add('.modal-btn');
   modalContent.appendChild(modalButtons);
 const modalBtn1 = document.createElement('button');
 modalBtn1.id = 'modal-btn1';
 modalButtons.prepend(modalBtn1);
 modalBtn1.innerText = `${projectArr[5].liveVersion}`;
 const modalBtn2 = document.createElement('button');
 modalBtn2.id = 'modal-btn2';
 modalButtons.append(modalBtn2);
 modalBtn2.innerText = `${projectArr[5].sourceLink}`;
 const modalLink = document.createElement('div');
 modalLink.classList.add('modal-link');
 modalContent.appendChild(modalLink);
 const modalLinkA = document.createElement('a');
 modalLinkA.innerHTML = '&#8592;  <span>previous project</span>';
 modalLink.appendChild(modalLinkA);
 const modalLinkB = document.createElement('a');
 modalLinkB.innerHTML = 'next project <span>&#8594;</span>';
 modalLink.appendChild(modalLinkB);

  const modalContent = document.querySelector('.modal-content');
   projectSection.appendChild(projectContent);




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








