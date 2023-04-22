import { useState } from "react";

function SearchBar({onSubmit}){
    const [searchKey, setSearchKey] = useState("");

    const handleChange = (event) => { 
        setSearchKey(event.target.value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        onSubmit(searchKey);
    };

    return (
        <div>
            <form className=" column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
                <input className="input is-medium is-info" type="text" value={searchKey} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;