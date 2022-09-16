import React from "react";
import styled from "styled-components";
import {FaUserAlt,FaUsers} from "react-icons/fa";

const StepThreeWrapper = styled.div`
.title_head{
  font-size: 25px
}
.title_desc{
  font-size:15px
}

.container{
  text-align: center
}
.Cards_div{
  display:flex;
}
.data_1 ,.data_2{
border: 1px solid #D3D3D3;

padding: 20px;
align-items: center;
margin : 10px
}
`;

const StepThree = ({setGoSteps}) => {
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
              <div>For myself</div>
              <div>Write better.Think more clearly.Stay organized</div>
            </div>
            <div className="data_2">
            <div><FaUsers/></div>
              <div>With my team</div>
              <div>Wikis,docs,tasks & projects, all in one place.</div>
            </div>
          </div>
          <button onClick={() => setGoSteps(3)}>Create WorkSpace</button>
        </div>
      </div>
    </StepThreeWrapper>
  );
};

export default StepThree
