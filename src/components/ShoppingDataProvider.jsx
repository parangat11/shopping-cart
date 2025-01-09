import { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext({
    data: [],
    change: () => {},
})
const url = 'https://fakestoreapi.com/products'

export const ShoppingDataProvider = ({children}) => {
    let localResult = null
    if(localStorage.getItem("res")) {
        localResult = (JSON.parse(localStorage.getItem("res")))
    }
    const [result, setResult] = useState(localResult)
    function handleChange(e, itemId) {
        console.log(e.target)
        const newItems = []
        if(result !== undefined) {
            for(let i = 0; i < result.length; i++) {
                if(itemId===result[i].id) {
                    result[i].qty = e.target.value
                    newItems.push(result[i])
                }
                else {
                    newItems.push(result[i])
                }
            }
            localStorage.setItem("res", JSON.stringify(newItems))
            setResult(newItems)
        }
    }
    useEffect(() => {
        if(!localResult) {
            fetch(url)
                .then((response) => response.json())
                .then((response) => {
                    const res = [];
                    for(let i = 0; i < response.length; i++) {
                        res.push({...response[i], qty: 0})
                    }
                    localStorage.setItem("res", JSON.stringify(res))
                    setResult(res)
                })
                .catch((error) => console.log(error))
        }
    }, [])
    return (
        <Context.Provider value={{
            data: result,
            change: (e, itemId) => handleChange(e, itemId),
        }}>
            {children}
        </Context.Provider>
    )
}

export const useResult = () => useContext(Context);

ShoppingDataProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}