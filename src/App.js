import React, { Component } from 'react'
import sections from '../data/sections.json';
import states from '../data/states.json';
import Chapter from './components/chapters.js';
import Header from  './components/header.js';

import './styles/main.css';

var questions = requireAll(require.context('../data', false, /[\d]+(,[\d]+)+.json/ ) );

function requireAll( requireContext ) {
  const arrays = requireContext.keys().map( requireContext );
  return [].concat(...arrays);
}

export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        data: this.convertToNestedArray(sections),
        selected: 0,
        states,
      };
      this.changeView = this.changeView.bind(this);
    }

    groupQuestionsAndSections(sections) {
      const newSections = sections.map(section => {
        const newQuestions = questions.filter(question => { 
          if (section.id !== - 1 ) {
              if (section.id === question.sectionId ) return question;
          }
        });
        section.questions = newQuestions;
        return section;
      })
      return newSections;
    }

    convertToNestedArray(array) {
      const newArray = this.groupQuestionsAndSections(array) 
      const rootObj = array.sort((a,b) => a.id - b.id )[0]
      
      function checkForChildren(obj, array) {
        obj.children = []; 
        for ( let i = 0; i < array.length;  i++) {
          if (obj.id === array[i].parentId) { 
            obj.children.push(array[i]);
            obj.children.map(child => {
              const arr = checkForChildren(child, array);
              if (!arr.length) {
                delete obj.questions
              }
              return  arr
            })
          } 
        }
        if (!obj.children.length) {
          delete obj.children;
        }
        return obj
      }
      return checkForChildren(rootObj, newArray);
    }

    changeView() { 
      const { states, selected } =  this.state;
      
      let newSelected = selected + 1;
      if ( newSelected > states.length) {
        newSelected = 0;
      } 
      const currentState = states[newSelected];     

      this.setState({ 
        selected: newSelected,
        currentState,
      })
    }

    render() {
        const { data, currentState } = this.state;       
        return (
          <div className="jumbotron vertical-center">
            <div
             className="container"
            >
              <div
                className="list-group"
              >
                  <Header 
                    title="Contents Page"
                    changeView={this.changeView} 
                  />
                  { data.children && data.children.map(chapter => 
                    <Chapter 
                      key={chapter.id}
                      chapter={chapter}
                      currentState={currentState}
                    />
                  )}
              </div>
            </div>
          </div>
        )
    }
}
