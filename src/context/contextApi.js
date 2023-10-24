import { createContext, useState, useEffect } from "react";

import {feachDataFromApi} from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectCategories, setSelectCategories] = useState('New')
    const [mobileMenu, setMobileMenu] = useState(false)

useEffect(() => {
    feachSelectedCategoryData(selectCategories);
}, [selectCategories]);

    const feachSelectedCategoryData = (query) =>{
        setLoading(true)
        feachDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents);
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )
}