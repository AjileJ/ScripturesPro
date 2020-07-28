import React from 'react';

const ScriptureLayout = props => {
    return(
        <div>
            <h2>{props.scripture.book} {props.scripture.chapter}:{props.scripture.verse}</h2>
            <h3>{props.scripture.passage}</h3>
        </div>
    )
}

export default ScriptureLayout