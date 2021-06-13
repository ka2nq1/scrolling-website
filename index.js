let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountainsBehind = document.getElementById('mountains_behind')
let mountainsFront = document.getElementById('mountains_front')
let btn = document.getElementById('btn')
let text = document.getElementById('text')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.5 + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  text.style.marginLeft = '-' + value * 3 + 'px';
  text.style.marginTop = value + 'px';
  btn.style.marginTop = value + 'px';
  header.style.top = value * 0.5 + 'px';
})