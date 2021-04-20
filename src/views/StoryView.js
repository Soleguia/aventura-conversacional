import React, {useEffect, useState} from 'react'
import { StoryComponent } from '../components/StoryComponent'

export const StoryView = () => {
    const [fragments, setFragments] = useState([])
    const [currentFragment, setCurrentFragment] = useState(0)
    const [showFragment, setShowFragment] = useState(false)

    useEffect( () => {
        fetch('./data/fragments.json')
            .then( req => req.json() )
            .then( res => {
                getShowFragment(res, currentFragment)
                setFragments(res);
            })
    }, [])
   
    useEffect( () => {
        let newShow = getShowFragment(fragments, currentFragment)
        setShowFragment(newShow);
    }, [fragments, currentFragment])

    const getShowFragment = (fragments, current) => {
        return fragments.find( fragment => fragment.id === current )
    }
    
    return (
        <div className="story">
            {
                showFragment ? <StoryComponent fragment={showFragment} sendData={setCurrentFragment}></StoryComponent> : ''
            }
        </div>
    )
}