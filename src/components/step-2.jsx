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
  label {
    width: 72%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .input_div {
    font-size: 10px;
    margin-top: 15px;
    margin-bottom: 5px;
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
  label{
    width: 72%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .button {
    width: 72%;
    height: 40px;
    background-color: #664de5;
    border-radius: 4px;
    color: #ffff;
    border: none;
    margin-top: 10px;
  }
  .url_div {
    width: 180px;
    height: 32px;
    font-size: 14px;
    color: "000000";
    background-color: #f8f9fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a9a9a9;
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
            <input
              type="text"
              placeholder="Steve Jobs"
              name="Full name"
              required
              className="input"
            />
          </div>
          <div className="input_div">
            <label>WorkSpace URL(optional)</label>
            <div style={{ display: "flex" }}>
              <div className="url_div"> www.eden.com/  </div>
              <input
                type="text"
                placeholder="Steve"
                name="Display name"
                className="input"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => setGoSteps(2)}
            className="button"
          >
            Create WorkSpace
          </button>
        </form>
      </div>
    </StepTwoWrapper>
  );
};

export default StepTwo;
