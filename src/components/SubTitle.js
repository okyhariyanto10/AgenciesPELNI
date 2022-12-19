import React from 'react'

export default function SubTitle({ children, className }) {

    const addClassName = className ? ` ${className}` : "";

    return (
        <div>
            <h3 className={`text-2xl font-normal mb-12 ${addClassName}`}>{children}</h3>
        </div>
    )
}
