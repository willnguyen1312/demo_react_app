import styled from 'styled-components'

export default styled.div`
  @media all and (min-width: 480px) {
    padding: 60px 0;
    form {
      margin: 0 auto;
      max-width: 320px;
    }
  }

  form span.help-block {
    font-size: 14px;
    padding-bottom: 10px;
    color: #999;
  }
`
