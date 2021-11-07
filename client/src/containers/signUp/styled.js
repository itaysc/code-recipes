import styled from 'styled-components';
import { MenuItem, TextField } from "@material-ui/core";
import theme from '../../theme';
import { HCenterBox } from '../../components';

export const Row = styled.div`
    display: flex;
`;
export const AnimatedDiv = styled.div`
    opacity: ${p=> p.currentStep === p.step? '1': '0'};  
    height: ${p=> p.currentStep === p.step? 'inherit': '0'};  
    transition: height 0.8s, opacity 0.7s, transform 1s ease-in-out;
    transform: translateX(${p=> p.currentStep === p.step? '0': '200%'});
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: ${theme.fontSize.large};
    text-align: center;
`;

export const StepContent = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;

export const PhoneInput = styled(TextField)`
    width: 100%;
    font-size: 3rem;
`;

export const PhoneNoContainer = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
`;

export const BottomButtonContainer = styled.div`
    position: absolute;
    bottom: 50px;
    margin-top: 100px;
    width: 90%;
    align-self: center;
    display: flex;
    justify-content: center;
    ${theme.screen.notMobile}{
        width: 40%;
    }
`;

export const OtherGenderOptions = styled.span`
    margin-top: 40px;   
    font-size: ${theme.fontSize.large};
    font-weight: bold;
    color: ${theme.colors.crayola};
    width: 100%;
    text-align: center;
    cursor: pointer;
`;

export const OtherOption = styled(MenuItem)`
    font-size: ${theme.fontSize.xlarge};
`;

export const OtpContainer = styled(HCenterBox)`
    display
`;