function ContentCategory({genres}){
    const genreBaseUrl = "https://myanimelist.net/anime/genre/";

    const genreList = genres.map(genre => {
        return (
            <span key={genre.mal_id} className="tag is-link is-light m-1">
                <a href={genreBaseUrl + genre.mal_id + "/" + genre.name} target="_blank" rel="noreferrer">{genre.name}</a>
            </span>
        );
    });

    return (
        <div>
            {genreList}
        </div>   
    );
}

export default ContentCategory;