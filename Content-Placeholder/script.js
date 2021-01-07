const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const _name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML = `
  <img src="https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="unsplash 이미지" />
  `;

  title.innerHTML = `
  Lorem ipsum dolor sit amet.
  `;
  excerpt.innerHTML = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, cumque!
  `;
  profile_img.innerHTML = `
  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="남자 이미지">
  `;
  _name.innerHTML = `John Doe`;
  date.innerHTML = `Jan 07, 2021`;

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);