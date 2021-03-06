import React, { memo } from 'react'

// import styles from '../css/story-component.module.css'

export const StoryNavigation = memo((props) => {
    
    const passAnswer = (answer) => {
        props.sendData(answer)
    }
    
    return (
        <React.Fragment>
            <div className="answers">
                { 
                    props.answers && props.answers.map( answer => {
                        return (<button 
                                    key={answer.fragment} 
                                    className="answer" 
                                    onClick={() => passAnswer(answer)}
                                >
                                    {answer.value}
                                </button>)
                    })
                }
            </div>
        </React.Fragment>
    )
})
