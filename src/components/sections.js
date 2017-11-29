import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Questions from './questions.js';

export default class Section extends Component {

    static defaultProps = {
      data: PropTypes.arrayOf(PropTypes.shape({})),
      currentState: PropTypes.shape({}),
    }
    
    constructor(props){
      super(props) 
    }

    render() {
        const { data, currentState } = this.props;
        return (
          <ul>
          {data.map(section => 
            <li
              className="list-group"
              key={section.id}
            >
              <h5>{section.title}</h5>
              {section.children && <Section data={section.children} />}
              {!section.children && 
                <Questions questions={section.questions} currentState={currentState} />
              }
            </li>
          )}
          </ul>
        )
    }
}
