// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const updatedFaqsList = faqsList.map(eachItem => ({
      ...eachItem,
      isActive: false,
    }))

    this.setState(prevState => ({
      faqList: [...prevState.faqList, ...updatedFaqsList],
    }))
  }

  showAnswer = id => {
    this.setState(prevState => ({
      faqList: prevState.faqList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isActive: !eachItem.isActive}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqList} = this.state
    return (
      <div className="app-container">
        <div className="faqs-app">
          <h1 className="faqs-title">FAQS</h1>
          <ul className="faq-items-container">
            {faqList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqDetails={eachItem}
                showAnswer={this.showAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
