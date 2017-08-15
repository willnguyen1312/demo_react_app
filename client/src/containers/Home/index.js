import React from 'react'
import { connect } from 'react-redux'
import HomeWrapper from './Wrapper'
import { fetchQuote, fetchSecretQuote } from './actions'

// eslint-disable-next-line
// class Home extends Component {
//   render() {
//     return (
//       <HomeWrapper>
//         <div className="lander">
//           <h1>Scratch</h1>
//           <p>A simple note taking app</p>
//           <div>
//             <Link to="/login" className="btn btn-info btn-lg">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-success btn-lg">
//               Signup
//             </Link>
//           </div>
//         </div>
//       </HomeWrapper>
//     )
//   }
// }

// eslint-disable-next-line
const Home = ({ fetchQuote: quote }) =>
  (<HomeWrapper>
    <div className="lander">
      <h1>Scratch</h1>
      <p>A simple note taking app</p>
      <button onClick={quote} className="btn btn-primary">
        Get Quotes
      </button>
    </div>
  </HomeWrapper>)

export default connect(null, {
  fetchSecretQuote,
  fetchQuote,
})(Home)
