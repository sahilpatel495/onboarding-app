import React, { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import styled from "styled-components";
import StepOne from "../../components/step-1";
import StepTwo from "../../components/step-2";
import StepThree from "../../components/step-3";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import StepFour from "../../components/step-4";
import logo from "../../assets/logo_eden.png";

const Dashboard = () => {
  const [goSteps, setGoSteps] = useState(0);
  const notify = () => toast("Wow so easy!");   
  return (
    <DashboardWrapper>
      <div className="container">
        <div className="logo">
          <img src={logo} className="logo_eden" style={{width:"30px",position: "relative",
    top: "8px"}} /> <span style={{fontWeight:"900"}}>Eden</span>
        </div>
        <div className="stepper_div">
          <Stepper
            activeStep={goSteps}
            styleConfig={{
              activeBgColor: "#664DE5",
              inactiveBgColor: "#FFFFFF",
              inactiveTextColor: "#818589",
              completedBgColor: "#664DE5",
            }}
            stepClassName={"stepper__step"}
          >
            <Step
              onClick={() => {
                setGoSteps(0);
                notify();
              }}
            />
            <Step onClick={() => setGoSteps(1)} />
            <Step onClick={() => setGoSteps(2)} />
            <Step onClick={() => setGoSteps(3)} />
          </Stepper>
        </div>
        {goSteps === 0 && <StepOne setGoSteps={setGoSteps} />}
        {goSteps === 1 && <StepTwo setGoSteps={setGoSteps} />}
        {goSteps === 2 && <StepThree setGoSteps={setGoSteps} />}
        {goSteps === 3 && <StepFour setGoSteps={setGoSteps} />}
      </div>
      <ToastContainer />
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .stepper_div{
    width: 60%;
    margin: 0 auto;
  }

  .container {
    width: 700px;

  }
  .logo {
    text-align: center;
  }
  .stepper__step {
    border: 1px solid #e5e4e2 !important;
    cursor: default !important;
  }
`;
