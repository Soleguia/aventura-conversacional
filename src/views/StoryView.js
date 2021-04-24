import React, {useContext, useEffect, useState} from 'react'
import HistoryComponent from '../components/HistoryComponent'
import { StoryComponent } from '../components/StoryComponent'
import { StoryNavigation } from '../components/StoryNavigation'
import { StoryContext } from '../context/StoryContext'

import styles from '../css/story-component.module.css'

export const StoryView = () => {
    
    const { story, setStory, currentFragment, setCurrentFragment } =  useContext(StoryContext);
    const [showFragment, setShowFragment] = useState(false)
    const [history, setHistory] = useState([])

    useEffect( () => {
        fetch('./data/fragments.json')
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
        setCurrentFragment(answer.fragment)
        let historyFragment = ({...showFragment, answers: showFragment.answers.find( a => a.fragment === answer.fragment)})
        let storyRecord = [...history, historyFragment]
        setHistory(storyRecord)
    }
    return (
        <div className="App">
            <div className="story">
                {
                    Object.keys(history).length > 0 && (
                        <div className={styles.history}>
                            <HistoryComponent history={history}></HistoryComponent>
                        </div>
                    )
                }
                <div className={styles.storyComponent}>
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