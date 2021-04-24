import React, { memo } from 'react'
import { StoryComponent } from './StoryComponent'

import styles from '../css/story-component.module.css'

const HistoryComponent = memo((props) => {
    return (
        <React.Fragment>
            {
                props.history.map( h => {
                        console.log({h});
                        return (
                            <React.Fragment key={h.id}>
                                <StoryComponent storyFragment={h}></StoryComponent>
                                <p className={[styles.storyFragment, styles.storyFragmentAnswer].join(' ')}>{h.answers.value}</p>
                            </React.Fragment>
                        )
                    }
                )
            }
        </React.Fragment>
    )
})

export default HistoryComponent