import { useEffect, useState } from "react"

const financialTips = [
  {
    tip: 'Do not save what is left after spending, but spend what is left after saving.',
    person: 'Warren Buffett',
  },
  {
    tip: 'The individual investor should act consistently as an investor and not as a speculator.',
    person: 'Ben Graham',
  },
  {
    tip: 'An investment in knowledge pays the best interest.',
    person: 'Benjamin Franklin',
  },
  {
    tip: 'It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.',
    person: 'Robert Kiyosaki',
  },
  {
    tip: 'Never depend on single income. Make investment to create a second source.',
    person: 'Warren Buffett',
  },
  {
    tip: 'The stock market is filled with individuals who know the price of everything, but the value of nothing.',
    person: 'Philip Fisher',
  },
]
const FinancialTips = () => {
    const [quote, setQuote] = useState(financialTips[0])
    // useEffect(()=>{
    //     setInterval(()=>{
    //      setQuote(financialTips[Math.floor(Math.random()*financialTips.length)])
    //     },3000)
    // },[])
  return (
    <div
      className=" d-flex flex-column justify-content-center"
      style={{ height: '50vh' }}
    >
      
        {quote.tip} -<span className="fw-bold">{quote.person}</span>
      
    </div>
  )
}
export default FinancialTips
