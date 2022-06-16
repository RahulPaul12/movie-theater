const load=()=>{

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e3513a09015c76979454d16f3e5d9f1e")
.then(res=>res.json())
.then(data=>setmovies(data.results));
 
const setmovies= (movies)=>{
  console.log(movies);
    const movieSpinner = document.getElementById("movie-spinner")
    movieSpinner.style.display = "none"
    const row = document.getElementById('row');
    for(movie of movies){
        
     const div = document.createElement('div');
     div.classList.add('d-inline');
      div.innerHTML=`<div class="col" onclick="detailsload('${movie.id}')" >
                      
                    <div class="card h-100 rounded-3 text-black">
                      <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" class="card-img-top" alt="poster">
                       <div class="card-body">
                        <h5 class="card-title ">${movie.title}</h5>
                         <h6 class="card-text">${movie.release_date}</h6>
                         
                         <span class="d-flex justify-content-between" style="color:orange;"><span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span></span><span>${movie.vote_average}</span></span>
                       </div>
                    </div>
                  </div>`;
  row.appendChild(div);
}}}

















const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',function(){
  const movieName = document.getElementById('search-input');
  const name = movieName.value;
fetch(`https://api.themoviedb.org/3/search/movie?api_key=e3513a09015c76979454d16f3e5d9f1e&language=en-US&page=1&include_adult=false&query=${name}`)
.then(res=>res.json())
.then(data=>searchresult(data.results));
const movieSpinner = document.getElementById("movie-spinner")
movieSpinner.style.display = "none"

const detail= document.querySelector('.row-detail');
  detail.innerHTML="";
const searchresult=(searchmovies)=>{
  
    for(searchmovie of searchmovies){
        console.log(searchmovie);
     const div = document.createElement('div');
     div.classList.add('d-flex');
     div.classList.add('justify-content-between');
     
      div.innerHTML=`<div class="card mb-3 text-black" style="width: 100%; max-height:200px;" onclick="detailsload('${searchmovie.id}')">
      <div class="row g-0">
        <div class="col-md-4" >
          <img style="width:100%;height:200px;" src="https://image.tmdb.org/t/p/original${searchmovie.backdrop_path}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${searchmovie.title}</h5>
            
            <p class="card-text">${searchmovie.release_date}</small></p>
            <span class="px-1" style="color:orange;"><span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span></span><span class="px-1">${searchmovie.vote_average}</span></span>
          </div>
        </div>
      </div>
    </div>`;
                     
  detail.appendChild(div);
}
}

})




function detailsload(id){

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e3513a09015c76979454d16f3e5d9f1e`)
  .then(res=>res.json())
  .then(data=>makeurl(data.results));
   const makeurl =(video)=>{
    const url = `https://youtube.com/watch?v=${video[0].key}`
   
  console.log(id);
   const detail= document.querySelector('.row-detail');
   const after =document.getElementById('row-detail');
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3513a09015c76979454d16f3e5d9f1e`)
  .then(res=>res.json())
  .then(data=>details(data));
  
  const details=(moviedetail)=>{
   let language='';
   console.log(moviedetail);
   // const div = document.createElement('div');
   //  //const moviecontainer = document.getElementById('detail-container');
   //   div.innerHTML=`<div class="col">
   //   <h1>Hello ${moviedetail.original_title}</h1>
   //               </div>`;
   if(moviedetail.original_language==='hi'){
     language='Hindi';
   }
   else{
     language='English';
   }
    detail.innerHTML='';
    detail.classList.add('d-flex');
    detail.classList.add('justify-content-between');
   detail.innerHTML=`<div>
                      <img src="https://image.tmdb.org/t/p/original${moviedetail.poster_path}"class="w-75" alt="poster">
                      </div>
                      <div class="ms-0">
                      <h1 >${moviedetail.original_title}</h1>
                      <h2 >${moviedetail.title}</h2>
                      <h6 >${moviedetail.release_date}</h6>
                      <h6>${language}</h6>
                      <p>${moviedetail.overview}</p>
                      <span class="px-1" style="color:orange;"><span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span></span><span class="px-1">${movie.vote_average}</span></span>
                      <p>Watch: ${moviedetail.popularity}m</p>
                      <iframe width="100%" height="300"
                      src='//www.youtube.com/embed/${video[0].key}'
                      </iframe> 
                   </div>`;
  }
}

}

load();