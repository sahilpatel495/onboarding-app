import React from "react";
import styled from "styled-components";

const StepTwoWrapper = styled.div`
  .title_head {
    font-size: 25px;
    font-weight: 800 !important;
    margin-top: 12px;
  }
  .title_desc {
    color: #a9a9a9;
    font-size: 12px;
    font-weight: 500;
    margin: 7px;
  }
  .name_input {
    display: flex;
    flex-direction: column;
  }
  .top-text {
    text-align: center;
  }
  .input1 {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input {
    width: 70%;
    height: 30px;
  }
  .step_contents {
    width: 70%;
    margin: 0 auto;
  }
  .input1_label {
    font-size: 10px;
    margin-top: 10px;
  }
  .form_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  label{
    width: 72%;
    margin-bottom: 5px;
    font-weight: bold;
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
  .input_div {
    font-size: 10px;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const StepTwo = ({ setGoSteps }) => {
  return (
    <StepTwoWrapper>
      <div className="step_contents">
        <div className="top-text">
          <div className="title_div">
            <div className="title_head">
              Let's set up a home for all your work
            </div>
            <div className="title_desc">
              you can always create another workspace later.
            </div>
          </div>
        </div>
        <form onSubmit={() => setGoSteps(1)} className="form_div">
         
          <div className="input_div">
            <label>Workspace Name</label>
            <div className="input1">
              <input
                type="text"
                placeholder="Eden"
                name="Workspace Name"
                required
                className="input"
              />
            </div>
          </div>


          <div className="input_div">
            <label>WorkSpace URL(optional)</label>
            <div className="input1">
              <input
                type="url"
                placeholder="Steve"
                name="Display name"
                required
                className="input"
              />
            </div>
          </div>
           <button onClick={() => setGoSteps(2)} className="button">
            Create WorkSpace
          </button>
        </form>
      </div>
      
    </StepTwoWrapper>
  );
};

export default StepTwo;
