import React, { useState, createContext, useContext } from 'react'

const StoryContext = createContext({});

const StoryContextProvider = ({children}) => {
    const [story, setStory] = useState([])
    const [currentFragment, setCurrentFragment] = useState(0)

    return (
        <StoryContext.Provider value={{story, setStory, currentFragment, setCurrentFragment}}>
            { children }
        </StoryContext.Provider>
    )
}

const StoryContextState = () => {
    const context = useContext(StoryContext)
    if( !context ) {
        throw new Error("Context? What Context?? What r'u' talkin' about???")
    }
    return context;
}

export { StoryContext, StoryContextProvider, StoryContextState }
