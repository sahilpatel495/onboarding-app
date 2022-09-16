import React, { useState } from "react";
import styled from "styled-components";
import {FaUserAlt,FaUsers} from "react-icons/fa";

const StepThreeWrapper = styled.div`
  .title_head {
    font-size: 25px;
    text-align: center;
  }
  .title_desc {
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
    color: #a9a9a9;
  }
  .container {
    width: 70%;
    margin: 0 auto;
  }
  .Cards_div {
    display: flex;
    width: 70%;
    margin: 0 auto;
    gap: 15px;
  }
  .data_1,
  .data_2 {
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    padding: 20px;
    margin: 10px;
    border-radius: 6px;
    width: 180px;
    height: 200px;
  }

  .button_div {
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
`;

const StepThree = ({setGoSteps}) => {
  const [flag,setFlag] = useState("1")
  const handleClick = (type) =>{
    console.log(type,'flag');
    setFlag(type)
  }
  return (
    <StepThreeWrapper>
      <div className="container">
        <div className="title_div">
          <div className="title_head">How are you planning to use Eden?</div>
          <div className="title_desc">
            We'll streamline your setup experience accordingly.
          </div>
          <div className="Cards_div">
            <div
              className="data_1"
              onClick={() => handleClick("1")}
              style={
                flag === "1"
                  ? { border: "3px solid #664DE5" }
                  : { border: "none" }
              }
            >
              <div>
                <FaUserAlt style={{ color: "#664DE5" }} />
              </div>
              <div>For myself</div>
              <div>Write better.Think more clearly.Stay organized</div>
            </div>
            <div
              className="data_2"
              onClick={() => handleClick("2")}
              style={
                flag === "2"
                  ? { border: "3px solid #664DE5" }
                  : { border: "none" }
              }
            >
              <div>
                <FaUsers />
              </div>
              <div>With my team</div>
              <div>Wikis,docs,tasks & projects, all in one place.</div>
            </div>
          </div>
          <div className="button_div">
            <button onClick={() => setGoSteps(3)} className="button">
              Create WorkSpace
            </button>
          </div>
        </div>
      </div>
    </StepThreeWrapper>
  );
};

export default StepThree
