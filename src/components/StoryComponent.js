import React, { memo } from 'react'
import parse from 'html-react-parser'

import styles from '../css/story-component.module.css'

export const StoryComponent = memo((props) => {
    
    return (
        <React.Fragment>
            {
                props.storyFragment?.image &&
                    <figure className={styles.image}>
                        <img src={'images/'+props.storyFragment.image} alt="Illustration" />
                    </figure>
            }   
            <div className={[styles.storyFragment, styles.storyFragmentColette].join(' ')}>{ props.storyFragment ? parse(props.storyFragment.colette) : 'Wait for it...' }</div>
        </React.Fragment>
    )
})
