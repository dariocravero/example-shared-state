import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    conditions: [
      {
        name: 'condition 1',
      },
      {
        name: 'condition 2',
      },
      {
        name: 'condition 3',
      },
    ],
    selectedConditions: [],
  }

  render() {
    const { props, state } = this

    return (
      <App
        {...props}
        {...state}
        toggleSelection={name => {
          this.setState({
            selectedConditions: state.selectedConditions.some(
              c => c.name === name
            )
              ? state.selectedConditions.filter(c => c.name !== name)
              : [...state.selectedConditions, { name }],
          })
        }}
      />
    )
  }
}
