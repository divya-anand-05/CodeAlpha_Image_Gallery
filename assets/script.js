const accessKey = 'k8ssmazwj1lgJnRekeL5Fjbjng2B5G4z4eoM7mf6Ej0';
const gallery = document.getElementById('gallery');
let page = 1;
let query = 'nature';

async function loadImages(){
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;
  const res=await fetch(url);
  const data=await res.json();
  data.results.forEach(photo=>{
   const div=document.createElement('div');
   div.classList.add('image-card');
   div.innerHTML=`
   <img src="${photo.urls.small}" onclick="openLightbox('${photo.urls.regular}')" alt="${photo.alt_description}"/>
   <div class="credit">
   <a href="${photo.user.links.html}" target="_blank"> ${photo.user.name}</a>
   </div>`;
   gallery.appendChild(div);
   observer.observe(div);
  });
}

function handleSearch(){
  const searchTerm=document.getElementById('search-input').value.trim();
  if(searchTerm){
    query=searchTerm;
    page=1;
    gallery.innerHTML='';
    loadImages();
  }
}

function searchCategory(cat){
  query=cat;
  page=1;
  gallery.innerHTML='';
  loadImages();
}
const infiniteObserver=new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    page++;
    loadImages();
  }
},{
  rootMargin:'100px'
});

infiniteObserver.observe(loader);

const observer=new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
 });
},{
 threshold:0.1
});


function toggleTheme(){
  document.body.classList.toggle('dark');
}

function openLightbox(src){
  document.getElementById('lightbox-img').src=src;
  document.getElementById('lightbox').style.display='flex';
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-input').value = '';
});


loadImages();


