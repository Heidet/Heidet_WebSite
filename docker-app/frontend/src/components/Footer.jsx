import React from "react";
import styled from "styled-components";

export default function Footer({ theme, toggleTheme }) {
  return (
    <div className="footer">
      <Section id="footer">
        <div className="quality container">  
          
          <ul>
           
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3></h3>
          </div>
       
          <div>
            <a href="/mentions" className="active">
            </a>
          </div>
        </div>
        
        <div className="contact container">
  
        </div>

      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2022 <Span>Heidet Antoine</Span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Span = styled.span`
  font-size: 20px;
`; 

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right,#4969e1,#09173e);
  color: ${({ theme }) => theme.text};
  display: grid;
  border-top: 2px solid ${({ theme }) => theme.text};
  grid-template-columns: repeat(5, 1fr);
  padding: 4vw;
  gap: 5vw;
  p {
    font-size: 15px;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    list-style-type: none;
    padding-left: initial;
    font-size: 15px;
  }
  .container {
    display: flex;
    width: 120%;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 9rem;
        width: 15rem;
      }
    }
  }
`;


const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border-top: 2px solid ${({ theme }) => theme.text};
  padding: 1rem;
  h2 {
    span {
      color: #4969e1;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;