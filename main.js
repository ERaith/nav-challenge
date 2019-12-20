var linksParent = document.querySelector('.container');
linksParent.addEventListener('click', activeLink);

function activeLink(event){
  if(event.target.classList.contains('navLink')){
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
  }
}
