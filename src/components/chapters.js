import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './sections.js';

export default class Chapters extends Component {
    
    static defaultProps = {
      chapter: PropTypes.arrayOf(PropTypes.shape({})),
      currentState: PropTypes.shape({}),
    }
    render() {
        const { chapter, currentState } = this.props;
        return (
          <div
            className="list-group-item"
            key={chapter.id}
          >   
            <h3>{chapter.title}</h3>
            <div
              className="list-group-item chapter"
            >
            {chapter.children.map(section => 
              <div
                key={section.id}
              >
                <h5>{section.title}</h5>
                <Section 
                  key={section.id}
                  data={section.children}
                  currentState={currentState} 
                />
              </div>
              )
            }
            </div>
          </div>
        )
    }
}
