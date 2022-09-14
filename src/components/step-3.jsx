import React from "react";
import styled from "styled-components";
import {FaUserAlt} from "react-icons/fa";

const StepThreeWrapper = styled.div`
.title_head{
  font-size: 25px
}
.title_desc{
  font-size:15px
}
// .name_input{
//   display: flex
//   flrex-direction: coloum 
// }
.container{
  text-align: center
}
`;

const StepThree = (setGoSteps) => {
  return (
    <StepThreeWrapper>
      <div className="container">
        <div className="title_div">
          <div className="title_head">How are you planning to use Eden?</div>
          <div className="title_desc">
            We'll streamline your setup experience accordingly.
          </div>
          <div className="Cards_div">
            <div className="data_1">
            <div><FaUserAlt/></div>
              <div></div>
              <div></div>
            </div>
            <div className="data_2"></div>
          </div>
          <button onClick={() => setGoSteps(3)}>Create WorkSpace</button>
        </div>
      </div>
    </StepThreeWrapper>
  );
};

export default StepThree;
