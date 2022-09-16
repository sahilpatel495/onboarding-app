import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StepOne = ({ setGoSteps }) => {
  const notify = () => toast("please fill required details");

  return (
    <StepOneWrapper>
      <div className="top-text">
        <div className="title_div">
          <div className="title_head">Welcome! First things first...</div>
          <div className="title_desc">You can always change them later.</div>
        </div>
        </div>
        <div className="data1">
        <form onSubmit={() => setGoSteps(1)}>
          <div className="input1_label">
            <span>
              <label>Full Name</label>
            </span>
          </div>
          <div className="input1">
            <input type="text" placeholder="Steve Jobs" name="Full name" required />
          </div>


          <div className="input1_label">
            <span>
              <label>Display Name</label>
            </span>
          </div>
          <div className="input1">
            <input type="text" placeholder="Steve" name="Display name" required />
          </div>

          <button type="submit" onClick={() => notify()}>
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
    text-color:#A9A9A9;
    font-size: 12px;
    font-weight: 500;
    margin: 7px;
  }
  .name_input {
    display: flex;
    flrex-direction: coloum;
  }
  .top-text {
    text-align: center;
  }
  .input1{
    width:100%;
    position:relative;
    display : block;

  }
  .data1{
    display:flex;
    justify-content:center;
    width:100%;
  }
`;
