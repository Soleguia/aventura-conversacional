import React, { useState, memo } from 'react'
import { StoryComponent } from './StoryComponent'

const HistoryComponent = memo((props) => {
    console.log({props})


    return (
        <React.Fragment>
            <h2>Conversación</h2>
            {
                props.history.map( h => {
                        console.log({h});
                        return <StoryComponent fragment={h}></StoryComponent>
                    }
                )
            }
        </React.Fragment>
    )
})

export default HistoryComponent