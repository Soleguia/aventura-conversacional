import React, { memo, useEffect, useRef } from 'react'
import { StoryComponent } from './StoryComponent'

// import styles from '../css/story-component.module.css'

const HistoryComponent = memo((props) => {
    let messagesEnd = useRef();

    const scrollToBottom = () => {
        messagesEnd.current.scrollTop = messagesEnd.current.scrollHeight;
    }

    useEffect(() => {
        scrollToBottom()
    }, [props.history])

    return (
        <React.Fragment>
            <div className="storyHistory">
                <div className="historyFragments" ref={messagesEnd}>
                {
                    props.history.map( h => {
                        return (
                            <React.Fragment key={h.id}>
                                <StoryComponent storyFragment={h}></StoryComponent>
                                <div className="storyLine storyLineAnswer">{h.answers.value}</div>
                            </React.Fragment>
                        )
                    })
                }
                </div>
            </div>
        </React.Fragment>
    )
})

export default HistoryComponent