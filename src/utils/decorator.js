import React from 'react'

/**
 * 需要验证登录
 */
export const needAuth = (component) => class extends React.Component{
  render(){
    const test = true;
    if (test) {
      return (<div>test</div>)
    }
    return (<component />)
  }
}