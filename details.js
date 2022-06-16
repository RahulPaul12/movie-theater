const loadDetails=(id)=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3513a09015c76979454d16f3e5d9f1e`)
    .then(res=>res.json())
    .then(data=>console.log(data))


    const detailsmovies= (movie)=>{
     console.log(movie.id);
    
    
}

}
