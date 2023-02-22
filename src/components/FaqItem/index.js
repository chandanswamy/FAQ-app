// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, showAnswer} = props
  const {id, answerText, questionText, isActive} = faqDetails

  const onClickToShowAnswer = () => {
    showAnswer(id)
  }

  console.log(isActive)

  return (
    <li className="faq-item">
      <div className="faq-container">
        <div className="question">
          <h1 className="question">{questionText}</h1>
        </div>
        {isActive && (
          <button
            type="button"
            className="button"
            onClick={onClickToShowAnswer}
          >
            <img
              className="plus-or-minus-icon"
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
        {!isActive && (
          <button
            type="button"
            className="button"
            onClick={onClickToShowAnswer}
          >
            <img
              className="plus-or-minus-icon"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        )}
      </div>
      <div>
        {isActive && (
          <div>
            <hr className="line-style" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </div>
    </li>
  )
}

export default FaqItem
