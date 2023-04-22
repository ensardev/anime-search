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
                            <p className="title is-4">{anime.title}</p>
                            <p className="subtitle is-6">{anime.title_japanese}</p>
                        </div>
                    </div>

                    <div className="level-item has-text-centered">
                        <div className="p-2">
                            <p className="heading">Score</p>
                            <p className="title">{anime.score}</p>
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

                    <hr/>

                    <div className="content">
                        {(anime.synopsis && anime.synopsis.substring(0, 150)) ?? 'No description available.'} | <a href={anime.url}>Read More...</a>
                    </div>


                    <div className="content">
                        {anime.year ?? "" } {anime.season ?? ""} 
                    </div>


                    <div className="content">
                        <ContentCategory genres={anime.genres}/>
                    </div>




                </div> 
            </div>
        </div>
    );
}

export default ContentDetail;