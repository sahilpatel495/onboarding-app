import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const StepOne = ({ setGoSteps }) => {
  const notify = () => toast("please fill required details");   

  return (
    <StepOneWrapper>
      <div className="container">
        <div className="title_div">
          <div className="title_head">Welcome! First things first...</div>
          <div className="title_desc">You can always change them later.</div>
        </div>
        <form onSubmit={() => setGoSteps(1)}>
          <div className="name_input">
            <label>
            Full Name:
              <input type="text" placeholder="Steve Jobs" name="name" required/>
            </label>
          </div>
          <div className="name_input">
            <label> Display Name</label>
            <input placeholder="Steve" required />
          </div>
          <button type="submit" onClick={() =>  notify()}>
          Create WorkSpace
        </button>
        </form>
       
      </div>
    </StepOneWrapper>
  );
};

export default StepOne;

const StepOneWrapper = styled.div`
.title_head{
  font-size: 25px
}
.title_desc{
  font-size:15px
}
.name_input{
    display: flex
    flrex-direction: coloum 
}
.container{
    text-align: center
}
`;
