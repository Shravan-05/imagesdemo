let  a=document.getElementById('input');
let btn=document.getElementById('submit');
let div=document.getElementById('div');

let images='horse';
let page=1;
async function data() {
    images=a.value;
  let url = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=ro6v7CN8X2vl8w208YiivXftxDY6koInqVxQdQnaMTo&page=${page}&per_page=${5}`
  );
  let data1 = await url.json();
  data1.results.map((i)=>
  {
let img=document.createElement('img');
img.src=i.urls.small;
div.append(img);
  })
}
btn.addEventListener('click',(e)=>
{
    
    data();
    
})
async function next()
{
  let url = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=ro6v7CN8X2vl8w208YiivXftxDY6koInqVxQdQnaMTo&page=${page=page+1}&per_page=${5}`
  );
  let data1 = await url.json();
  data1.results.map((i)=>
  {
let img=document.createElement('img');
img.src=i.urls.small;
div.append(img);
  })

};
