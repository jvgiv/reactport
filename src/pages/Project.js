import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="project">
                <img className="" src={this.props.project.image} alt="Project Picture" />
                <h2>{this.props.project.title}</h2>
                <p className="paragraph">{this.props.project.content} <a>This project is deployed here</a></p>
            </div>
        )
    }
}
