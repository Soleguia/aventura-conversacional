import React, { memo } from 'react'
import { StoryComponent } from './StoryComponent'

// import styles from '../css/story-component.module.css'

const HistoryComponent = memo((props) => {
    return (
        <React.Fragment>
            <div className="storyHistory">
                <div className="historyFragments">
                {
                    props.history.map( h => {
                        console.log({h});
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