import styled from 'styled-components';

export const Body = styled.div`
  -webkit-font-smoothing : antialiased !important;
  min-height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => `${props.backgroundColor}`};
`;

export const Card = styled.div`
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all .2s ease-in-out;
  text-align:center;
  background: #FFF;

  :hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 54px;
}

img {
  height: 200px;
  opacity: .8;
  overflow: hidden;
  transition: all .2s ease-in-out;

  :hover {
    opacity: .9;
  }
}

p {
  color: #483D8B;
}
`;

export const Input = styled.div`
    input {
        padding: 0.7em;
        width: 25vw;
        border: 1px solid #CCC;
        display: block;
        margin:auto;
        margin-top:2em;
    }
`;