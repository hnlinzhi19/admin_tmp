import React from 'react'
import {  Redirect } from 'react-router'

import '../../scss/404.scss'
import img404 from '../../imgs/404.svg'
import imgRock from '../../imgs/rocket.svg'
import imgEarch from '../../imgs/earth.svg'
import imgMoon from '../../imgs/moon.svg'
import imgAstronaut from '../../imgs/astronaut.svg'

export default class HomePage extends React.Component{
  render(){
    if (this.props.match.url === '/') {
      return (<Redirect to="/home" />)
    }
    return (<div className="page-404">
      <div className="stars">
        <div className="central-body">
            <img className="image-404" src={ img404 } width="300px" />
            {/* <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank">GO BACK HOME</a> */}
        </div>
        <div className="objects">
            <img className="object_rocket" src={imgRock} width="40px"/>
            <div className="earth-moon">
                <img className="object_earth" src={imgEarch} width="100px"/>
                <img className="object_moon" src={imgMoon} width="80px"/>
            </div>
            <div className="box_astronaut">
                <img className="object_astronaut" src={imgAstronaut} width="140px"/>
            </div>
        </div>
        <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
        </div>

      </div>
    </div>)
  }
}