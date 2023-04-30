import React from 'react'

export default function FeadbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(label => {
        return <button key={label} name={label} onClick={onLeaveFeedback}>{label}</button>
      })}
    </>
  )
}
