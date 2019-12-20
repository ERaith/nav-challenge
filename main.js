var linksParent = document.querySelector('.link-container');
linksParent.addEventListener('click', activeLink);

function activeLink(event) {
  if (event.target.classList.contains('navLink')) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    swapContent(event);
  }
}

function swapContent(event) {
  var mainHTML = `<div class="all-courses">
    <p>Share Udemy with Friends!</p>
  </div>`;
  var collectionsHTML = `<div class="collections">
    <h3>Organize</h3>
  </div>`;
  var wishListHTML = `<div class="wishlist">
    <button>Browse Stuff</button>
  </div>`;
  var archivedHTML = `  <div class="archived">
      <h2>Past things</h2>
      <p>Something something dark side</p>
    </div>`;
  var replacementHTML = '';
  console.log(event.target.innerHTML);
  switch (event.target.innerHTML) {
    case 'All Courses':
      replacementHTML = mainHTML;
      break;
    case 'Collections':
      replacementHTML = collectionsHTML;
      break;
    case 'Wishlist':
      replacementHTML = wishListHTML;
      break;
    case 'Archived':
      replacementHTML = archivedHTML;
      break;
  }
  var mainParent = document.querySelector('main');
  mainParent.innerHTML = replacementHTML;
}
