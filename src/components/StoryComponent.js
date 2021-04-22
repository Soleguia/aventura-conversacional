import React, { memo } from 'react'
import parse from 'html-react-parser'

import styles from '../css/story-component.module.css'

export const StoryComponent = memo((props) => {
    
    const handleAnswers = (answers) => {
        return answers?.map( answer => {
            return (<button key={answer.fragment} className={styles.answer} onClick={() => passAnswer(answer.fragment)}>{answer.value}</button>)
        })
    }

    const passAnswer = (answer) => {
        props.sendData(answer)
    }
    
    return (
        <React.Fragment>
            <div className={styles.storyComponent}>
                    {
                        props.fragment?.image 
                        ?
                            <figure className={styles.image}>
                                <img src={'images/'+props.fragment.image} alt="fragment image" />
                            </figure>
                        :
                            ''
                    }   
                <div className={styles.coletteText}>{ props.fragment ? parse(props.fragment.colette) : 'Wait for it...' }</div>
                <div className={styles.answers}>
                    { props.fragment ? handleAnswers(props.fragment.answers) : '' }
                </div>
            </div>
        </React.Fragment>
    )
})
