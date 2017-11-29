import React, { Component } from 'react'
import Section from './sections.js';

export default class Header extends Component {
    render() {
        const { title, changeView} = this.props;
        return (
          <div
            className="list-group-item"
          >            
            <h2>{title}</h2>
            <div className="changeView">
              <button
                className="btn btn-default pull-right"
                onClick={changeView} 
                type="button"
              >
                Change View
              </button>
            </div>
          </div>
        )
    }
}
