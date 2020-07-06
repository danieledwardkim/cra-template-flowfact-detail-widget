import React from 'react'
import './Widget.scss'

export default function Widget({ entity }) {
    return (
        <div className="MyWidget">
            <h1>Hello,</h1>
            <h2>{entity.emails.values[0]}</h2>
        </div>
    );
}