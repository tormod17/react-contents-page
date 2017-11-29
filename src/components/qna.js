import React, { Component } from 'react'

export default class qna extends Component {
    
    constructor(props){
      super(props)
      this.state ={
        show: false,
      }
      this.checkTocIdExpanded = this.checkTocIdExpanded.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      const { currentState } = nextProps;
      if (!currentState.expanded) {
        this.setState({
          show: false,
        })
      }
      if(this.props.currentState !== currentState && currentState.expanded) {
        this.checkTocIdExpanded(nextProps.currentState);
      }
    }

    checkTocIdExpanded(currentState) {
      const { tocId } = this.props.question;
      this.setState({
        show: currentState.expanded.includes(tocId),
      })
    }

    createMarkup = (string) => ({__html: string })

    render() {
        const { show } = this.state;
        const  { question } = this.props;
        return (
          <div>
            { show && 
              <div
                className="list-group-item"
              >
                <div dangerouslySetInnerHTML={this.createMarkup(question.question)} />
                <div dangerouslySetInnerHTML={this.createMarkup(question.answer)} />
              </div>
            }
          </div>
        )
    }
}
