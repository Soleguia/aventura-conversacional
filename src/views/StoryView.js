import React, {useEffect, useState} from 'react'
import { StoryComponent } from '../components/StoryComponent'

function StoryView() {
    const [fragments, setFragments] = useState([])
    const [currentFragment, setCurrentFragment] = useState(0)
    const [showFragment, setShowFragment] = useState(false)

    useEffect( () => {
        if(fragments.length > 0){
            getShowFragment(fragments);
        } else {
            fetch('./data/fragments.json')
                .then( req => req.json() )
                .then( res => {
                    getShowFragment(res)
                    setFragments(res);
                })
        }
    }, [currentFragment])
   
    const getShowFragment = (fragments) => {
        let newShow = fragments.find( fragment => fragment.id === currentFragment )
        setShowFragment(newShow);
    }
    const updateCurrentFragment = (value) => {
        setCurrentFragment(value)
        getShowFragment(fragments);
    }
    

    return (
        <div className="story">
            <StoryComponent fragment={showFragment} sendData={updateCurrentFragment}></StoryComponent>
        </div>
    )
}

export { StoryView }
