import React, {useEffect, useState} from 'react'
import HistoryComponent from '../components/HistoryComponent'
import { StoryComponent } from '../components/StoryComponent'

export const StoryView = () => {
    const [fragments, setFragments] = useState([])
    const [currentFragment, setCurrentFragment] = useState(0)
    const [showFragment, setShowFragment] = useState(false)
    const [history, setHistory] = useState({})

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
    
    const nextFragment = (id) => {
        setCurrentFragment(id)
        setHistory(showFragment)
    }
    return (
        <div className="story">
            {
                history ? <HistoryComponent history={history}></HistoryComponent> : ''
            }
            {
                showFragment ? <StoryComponent fragment={showFragment} sendData={nextFragment}></StoryComponent> : ''
            }
        </div>
    )
}