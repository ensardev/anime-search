import ContentDetail from "./ContentDetail";

function ContentList({animes}){
    const renderedAnimes = animes.map((anime) => { 
        return <ContentDetail key={anime.mal_id} anime={anime}/>
    });

    return (
            <div className="columns is-flex-wrap-wrap">
                {renderedAnimes}
            </div>          
        )
};

export default ContentList;