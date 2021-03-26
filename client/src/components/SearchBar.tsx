import React from 'react'
import opencage from 'opencage-api-client'

import { OPENCAGE_KEY } from '@services/opencage/client'

import searchBarStyles from '@styles/modules/SearchBar.module.scss'

const SearchBar = ({ placeholder, setResultList }: { placeholder?: string, setResultList: any }) => {

    const [typing, setTyping] = React.useState(false)

    const handleChange = event => {
        setTyping(true);
        setTimeout(() => {
            if (!typing) {
                setTyping(false);
                if (event.target.value.length > 3) {
                    opencage.geocode({ key: OPENCAGE_KEY, q: event.target.value.trim(), language: 'fr' }).then(data => {
                        if (data.status.code === 200) {
                            const results = data.results;
                            if (results.length > 0) setResultList(results);
                        }
                    }).catch(e => {
                        console.log('Error @handleChange: ', e.message);
                    });
                }
            }
        }, 3000);
    }

    return (
        <div className={searchBarStyles.searchBar}>
            <div className={searchBarStyles.icon}>
                <i className="ri-search-2-line"></i>
            </div>
            <input type="text" placeholder={placeholder} autoFocus onChange={handleChange} />
        </div>
    )
}

export default SearchBar