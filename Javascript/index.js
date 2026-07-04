const bookMarknameE= document.getElementById("bookMark-name");
const bookMarkformE= document.getElementById("bookMark-Info")
const bookMarkurlE = document.getElementById("bookMark-url");
const bookMarkInfo = document.getElementById("bookMark-Info")
const bookMarkaddE = document.getElementById("add-bookMark");
const bookMarklistE = document.querySelector(".bookMark-list");
let bookMark = JSON.parse(localStorage.getItem("bookMark"))||[];
bookMarkInfo.addEventListener("submit",addtextContext);
function addtextContext(event)
{
  event.preventDefault();
  //get form values
  const name = bookMarknameE.value.trim();
  const url = bookMarkurlE.value;
  bookMark.push({
    id:Date.now(),
    name,
    url
  });
  localStorage.setItem("bookMark",JSON.stringify(bookMark));
  addlistItem();
  bookMarkformE.reset();
};
function addlistItem()
{
 bookMarklistE.innerHTML="";
 const sortBookmark = [...bookMark].reverse();
 sortBookmark.forEach((bookmark)=>{
 const bookMarkEl = bookMarklist(bookmark);
 bookMarklistE.appendChild(bookMarkEl);
 }
);
};
function bookMarklist(bookmark)
{
    const li = document.createElement("li");
    li.classList.add("bookMark");
    li.innerHTML=`<span><a href="${bookmark.url}">${bookmark.name}</a></span> 
    <span><button id="remove-btn" onclick="removefromList(${bookmark.id})">Remove</button></span>`
    return li;
}
function removefromList(id){
bookMark = bookMark.filter(bookmark=>bookmark.id!==id);
localStorage.setItem("bookMark",JSON.stringify(bookMark));    
//update UI
addlistItem();
}
addlistItem();
