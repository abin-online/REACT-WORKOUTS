import { useState } from "react"

function ListCountry () {
    const [searchItem , setSearchItem] = useState('')
    const [filteredCountries, setFilteredCountries] = useState(['India', 'Sri Lanka', 'Pakistan' ,'Indonesia' ]);

    const searching = () => {
        const filtered = filteredCountries.filter((x) => 
            x.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return(
        <div>
             <input type='text' value={searchItem} onChange={(e)=> setSearchItem(e.target.value)}  onKeyUp={searching}/>
             
            <ul>
                {filteredCountries.map((x,i)=>{
                    return <li key={i}>{x}</li>
                })}
                
            </ul>
        </div>
    )

}
export default ListCountry