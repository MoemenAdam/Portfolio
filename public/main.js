const moon = document.querySelectorAll('.moon');
const sun = document.querySelectorAll('.sun');
const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const Top = document.querySelector('#top');
const outer = document.querySelector('#outer');

const prevTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


// Theme
const iconTogle = () => {
  moon[0].classList.toggle('hidden');
  moon[1].classList.toggle('hidden');
  sun[0].classList.toggle('hidden');
  sun[1].classList.toggle('hidden');
}

const themeCheck = () => {
  if (prevTheme === 'dark' || (!prevTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moon[0].classList.add('hidden');
    moon[1].classList.add('hidden');
  } else {
    sun[0].classList.add('hidden');
    sun[1].classList.add('hidden');
  }
}

const themeTogle = () => {
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconTogle();
  }else{
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    iconTogle();
  }
}

moon[0].addEventListener('click', themeTogle);
moon[1].addEventListener('click', themeTogle);
sun[0].addEventListener('click', themeTogle);
sun[1].addEventListener('click', themeTogle);
themeCheck();

// burgoer
burger.addEventListener('click', () => {
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  }
  else{
    menu.classList.add('hidden');
  }
});
outer.addEventListener('click', () => {
  menu.classList.add('hidden');
});

// scroll to top 
window.addEventListener('scroll', () => {
  if (window.scrollY <= 100) {
    Top.classList.remove('active');
  } else {
    Top.classList.add('active');
  }
});