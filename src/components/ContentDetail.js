import ContentCategory from "./ContentCategory";

function ContentDetail({anime}){
    return (
        <div className="column is-4">
            <div className="card ">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={anime.images.jpg.large_image_url} alt={anime.title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4"><a href={anime.url} target="_blank" rel="noreferrer">{anime.title}</a></p>
                            <p className="subtitle is-6">{anime.title_japanese}</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="level-item has-text-centered">
                            <div className="p-2">
                                <p className="heading">Score</p>
                                <p className="title">{anime.score ?? "-"}</p>
                            </div>
                            <div className="p-2">
                                <p className="heading">Popularity</p>
                                <p className="title">{anime.popularity}</p>
                            </div>
                            <div className="p-2">
                                <p className="heading">Ranks</p>
                                <p className="title">{anime.rank}</p>
                            </div>
                        </div>    
                    </div>

                    <div className="content">
                        {(anime.synopsis && anime.synopsis.substring(0, 150)) ?? 'No description available.'} | <a href={anime.url}>Read More...</a>
                    </div>

                    <div className="content-category">
                        <ContentCategory genres={anime.genres}/>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default ContentDetail;