import React from 'react'
import Condition from './Condition.view.js'

let ConditionLogic = props => (
  <Condition {...props} onClick={() => props.toggleSelection(props.name)} />
)
export default ConditionLogic
