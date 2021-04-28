import React, {useContext, useEffect, useState} from 'react'
import HistoryComponent from '../components/HistoryComponent'
import { StoryComponent } from '../components/StoryComponent'
import { StoryNavigation } from '../components/StoryNavigation'
import { StoryContext } from '../context/StoryContext'

// import styles from '../css/story-component.module.css'

export const StoryView = () => {
    
    const { story, setStory, currentFragment, setCurrentFragment } =  useContext(StoryContext);
    const [showFragment, setShowFragment] = useState(false)
    const [history, setHistory] = useState([])

    useEffect( () => {
        fetch('./data/story.json')
            .then( req => req.json() )
            .then( res => {
                setStory(res)
                getShowFragment(res, currentFragment)
            })
    }, [])
   
    useEffect( () => {
        let newShow = getShowFragment(story, currentFragment)
        setShowFragment(newShow);
    }, [story, currentFragment])

    const getShowFragment = (fragments, current) => {
        return fragments.find( fragment => fragment.id === current )
    }
    
    const processAnswer = (answer) => {
        if(answer.fragment === 'end' || answer.fragment === 0 ){
            setHistory([])
        } else {
            let historyFragment = ({...showFragment, answers: showFragment.answers.find( a => a.fragment === answer.fragment)})
            let storyRecord = [...history, historyFragment]
            setHistory(storyRecord)
        }
        setCurrentFragment(answer.fragment)
    }
    return (
        <div className="App">
            <div className="story">
                {
                    Object.keys(history).length > 0 && (
                        <HistoryComponent history={history}></HistoryComponent>
                    )
                }
                <div className="storyCurrent">
                    {
                        showFragment && (
                            <>
                                <StoryComponent storyFragment={showFragment}></StoryComponent>
                                <StoryNavigation answers={showFragment.answers} sendData={processAnswer} ></StoryNavigation>
                            </>
                        )
                    }    
                </div>
            </div>
        </div>
    )
}