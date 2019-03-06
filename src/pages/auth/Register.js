import React from 'react'
import {needAuth} from 'utils/decorator'

@needAuth
export default class HomePage extends React.Component{
  state ={
    test: '12132'
  }
  render(){
    return (<div>
      register
    </div>)
  }
}