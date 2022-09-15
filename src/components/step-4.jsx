import React from 'react'
import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa";

const StepFourWrapper = styled.div`
.title_head{
  font-size: 25px
}
.title_desc{
  font-size:15px
}
.container{
  text-align: center
}

`

const StepFour = ({setGoSteps}) => {
  return (
    <StepFourWrapper>
    <div className='container'>
      <div><FaCheckCircle/></div>
        <div className='title_div'>
            <div className='title_head'>
                Congratulation, Eren!
            </div>
            <div className='title_desc'>
                You have completed onboarding,you can start using Eden!  
            </div>
            <button>Launch Eden</button>
        </div>      
    </div>
    </StepFourWrapper>
  )
}

export default StepFour