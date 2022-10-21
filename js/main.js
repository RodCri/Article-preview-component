const share = document.querySelector('.icon-share');
const shareOption = document.querySelector('.share');
const fill = document.querySelector('.fill');

share.addEventListener('click', ()=>{
  myFunction();
})

function myFunction() {
  shareOption.classList.toggle("show");
  share.classList.toggle('change');
  fill.classList.toggle('fillIcon');
}