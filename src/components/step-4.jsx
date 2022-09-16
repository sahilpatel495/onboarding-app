import React from 'react'
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const StepFourWrapper = styled.div`
  .title_head {
    font-size: 25px;
  }
  .title_desc {
    font-size: 12px;
    font-color: #a9a9a9;
    margin:10px
  }
  .container {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
  .button {
    width: 70%;
    height: 40px;
    background-color: #664de5;
    border-radius: 4px;
    color: #ffff;
    border: none;
    margin-top: 10px;
  }
  .outer_done_div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  .done_div {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #664de5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StepFour = ({setGoSteps}) => {
  return (
    <StepFourWrapper>
      <div className="container">
        <div className="outer_done_div">
          <div className="done_div">
            <AiOutlineCheck size={28} color="#ffff" />
          </div>
        </div>
        <div className="title_div">
          <div className="title_head">Congratulation, Eren!</div>
          <div className="title_desc">
            You have completed onboarding,you can start using Eden!
          </div>
          <button className="button">Launch Eden</button>
        </div>
      </div>
    </StepFourWrapper>
  );
}

export default StepFour