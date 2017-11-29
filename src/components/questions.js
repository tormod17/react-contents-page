import React, { Component } from 'react';
import Qna from './qna.js'

export default class questions extends Component {
    render() {
        const  { questions, currentState } = this.props;
        return (
          <div>
            { questions.map(question => 
                <Qna 
                  key={question.qa_id}
                  question={question} 
                  currentState={currentState} 
                /> 
              )
            }
          </div>
        )
    }
}
