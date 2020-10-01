import React from 'react'

interface LabelInputType {
  name: string;
  onChange: Function;
  type: string
}

const LabelAndInput = (props: LabelInputType) => {
  const {name, onChange, type = 'text'} = props
  return (<div>
    <label>{name}</label>
    <input onChange={(e) => onChange(e.target.value)} type={type} id={name} name={name} required />
  </div>)
}

export {LabelAndInput}
