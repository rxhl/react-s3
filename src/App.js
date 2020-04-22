import React from 'react';
import styled from 'styled-components';
import './App.css';

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  background-color: #dedede;
`;

const Inner = styled.div`
  display: grid;
  margin: 0 auto;
  width: 720px;
  height: calc(100vh - 80px);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const App = () => {
  return (
    <Outer>
      <Inner>Hello</Inner>
    </Outer>
  );
};

export default App;
