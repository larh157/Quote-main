import './App.css'
import { quotes } from './components/quotes.js'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuote } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [quote, setQuote] = useState(quotes[0])
  const randomNumber = () => Math.floor(Math.random() * quotes.length)
  
  return (
    <>
    <div id='quote-box'>
    <FontAwesomeIcon icon={faQuote} />
    <h1 id='text'>{quote.text}</h1>
    <h3 id='author'>-{quote.author}</h3>
    <button id='new-quote' onClick={()=> setQuote(quotes[randomNumber()])}>New Quote</button>
    <a id='tweet-quote' href="twitter.com/intent/tweet"><FontAwesomeIcon icon={faSquareTwitter} /></a>
    </div>
    </>
)
}
export default App