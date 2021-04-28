import React, { memo } from 'react'
import parse from 'html-react-parser'

// import styles from '../css/story-component.module.css'

export const StoryComponent = memo((props) => {
    
    return (
        <React.Fragment>
            <div className="storyFragment">
                {
                    props.storyFragment?.image &&
                        <figure className="image">
                            <img src={'images/'+props.storyFragment.image} alt="Illustration" />
                        </figure>
                }   
                <div className="storyLine storyLineColette">{ props.storyFragment ? parse(props.storyFragment.message) : 'Wait for it...' }</div>
            </div>
        </React.Fragment>
    )
})
