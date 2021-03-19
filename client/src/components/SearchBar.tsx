import searchBarStyles from '@styles/modules/SearchBar.module.scss'

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
    return (
        <div className={searchBarStyles.searchBar}>
            <div className={searchBarStyles.icon}>
                <i className="ri-search-2-line"></i>
            </div>
            <input type="text" placeholder={placeholder} autoFocus />
        </div>
    )
}

export default SearchBar