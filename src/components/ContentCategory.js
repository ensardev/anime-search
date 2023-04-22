function ContentCategory({genres}){
    const genreList = genres.map(genre => {
        return (
            <span key={genre.mal_id} className="tag is-info m-1">{genre.name}</span>
        );
    });

    return (
        <div>
            {genreList}
        </div>   
    );
}

export default ContentCategory;