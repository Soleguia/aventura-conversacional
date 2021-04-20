import React from 'react'
import parse from 'html-react-parser'

import styles from '../css/story-component.module.css'

function StoryComponent(props) {

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
                {
                    props.fragment?.image 
                    ?
                        <figure className={styles.image}>
                            <img src={'images/'+props.fragment.image} />
                        </figure>
                    :
                        ''
                }   
            <div className={styles.coletteText}>{ props.fragment ? parse(props.fragment.colette) : 'Wait for it...' }</div>
            <div className={styles.answers}>
                { props.fragment ? handleAnswers(props.fragment.answers) : '' }
            </div>
        </React.Fragment>
    )
}

export { StoryComponent };