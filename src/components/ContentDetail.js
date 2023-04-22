import Icon from '@mdi/react';
import { mdiStarShooting } from '@mdi/js';
import { mdiHeart } from '@mdi/js';

function ContentDetail({anime}){
    return (
        <div className="column is-3">
            <div className="card">
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
                            <hr/>
                        </div>
                    </div>

                    <div className="content">
                        {(anime.synopsis && anime.synopsis.substring(0, 150)) ?? 'No description available.'} | <a href={anime.url}>Read More...</a>
                    </div>
                    <span className="icon-text">
                        <span className="icon">
                            <Icon path={mdiStarShooting} size={1} />
                        </span>
                        <span>{anime.score} </span>
                    </span>
                    <span className="icon-text">
                        <span className="icon">
                            <Icon path={mdiHeart} size={1} />
                        </span>
                        <span>{anime.scored_by} </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContentDetail;