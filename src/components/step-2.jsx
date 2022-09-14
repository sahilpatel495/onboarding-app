import React from 'react'
import styled from 'styled-components'


const StepTwoWrapper = styled.div`
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
`

const StepTwo = ({setGoSteps}) => {
  return (
    <StepTwoWrapper>
      <div className='container'>
        <div className='title_div'>
            <div className='title_head'>
                Let's set up a home for all your work
            </div>
            <div className='title_desc'>
                you can always create another workspace later.    
            </div>
            <form>
           <div className='name_input'>
           <label> Workspace  Name</label>
            <input placeholder='Eden'/>   
            </div> 
            <div className='name_input'>
           <label> WorkSpace URL(optional)</label>
            <input placeholder='Example'/>   
            </div> 
            <button onClick={() => setGoSteps(2)}>
            Create WorkSpace    
            </button>  
        </form>   
        </div>      
    </div>
    </StepTwoWrapper>
    
  )
}

export default StepTwo