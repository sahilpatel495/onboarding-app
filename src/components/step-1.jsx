import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StepOne = ({ setGoSteps }) => {
  const notify = () => toast("please fill required details");

  return (
    <StepOneWrapper>
      <div className="step_contents">
        <div className="top-text">
          <div className="title_div">
            <div className="title_head">Welcome! First things first...</div>
            <div className="title_desc">You can always change them later.</div>
          </div>
        </div>
        <form onSubmit={() => setGoSteps(1)} className="form_div">
          <div className="input_div">
              <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Steve Jobs"
                  name="Full name"
                  required
                  className="input"
                />
          </div>
          <div className="input_div">
            <label>Display Name</label>
              <input
                type="text"
                placeholder="Steve"
                name="Display name"
                className="input"
                required
              />
          </div>
          <button type="submit" onClick={() => notify()} className="button">
            Create WorkSpace
          </button>
        </form>
      </div>
    </StepOneWrapper>
  );
};

export default StepOne;

const StepOneWrapper = styled.div`
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
  
  .input {
    width: 70%;
    height: 30px;
  }
  .step_contents {
    width: 70%;
    margin: 0 auto;
  }
  label{
    width: 72%;
    margin-bottom: 5px;
    font-weight: bold;
  
  } .input_div {
    font-size: 10px;
    margin-top: 15px;
    margin-bottom:5px;
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
  .button {
    width: 72%;
    height: 40px;
    background-color: #664de5;
    border-radius: 4px;
    color: #ffff;
    border: none;
    margin-top: 10px;
  }
`;
