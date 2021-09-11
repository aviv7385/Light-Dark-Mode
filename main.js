const toggleSwitch = document.querySelector('input[type="checkbox"]');
const footer = document.getElementById('footer');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

let isLight = true;

//check local storage for theme 
function onLoad() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(!isLight);
    }
    else {
        toggleSwitch.checked = false;
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(isLight);
    }
}

// switch theme
function switchTheme() {
    //console.log(event.target.checked)
    //check if the slider is checked - if true - switch to dark mode. if false - switch to light mode
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(!isLight);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(isLight);
    }
}

// image dark/light mode
function imageMode(color) {
    image1.src = `img/undraw_Floating_re_xtcj_${color}.svg`
    image2.src = `img/undraw_Art_re_vj2w_${color}.svg`
    image3.src = `img/undraw_Departing_re_mlq3_${color}.svg`
}

// change theme
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    footer.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode(isLight ? 'light' : 'dark');
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// on loading of the page
onLoad();