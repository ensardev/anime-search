import "bulma/css/bulma.css";
import { useState } from "react";
import searchAnimes from "./Api";
import SearchBar from "./components/SearchBar";
import ContentList from "./components/ContentList";

function App(){
    const [animes, setAnimes] = useState([]);

    const handleSubmit = async (searchKey) => {
        const result = await searchAnimes(searchKey);
        setAnimes(result.data);
    };


    return (
        <div>
            <section className="hero is-link is-medium">
                <div className="hero-head">
                    <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <a href="/" className="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                        </a>
                        <span className="navbar-burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                            <a href="https://github.com/ensardev/anime-search" target="_blank" rel="noreferrer" className="button is-light">
                                <span>GitHub</span>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>

                
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <SearchBar onSubmit={handleSubmit}/>
                    <p className="subtitle">
                        Search any Anime
                    </p>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <ContentList animes={animes}/>
                </section>
            </div>
        </div>
        )
}

export default App;
