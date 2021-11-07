import React from 'react';
import OtpInput from 'react-otp-input';
import * as styled from './styled';
import {steps} from './consts';
import { AuthContext } from '../signUp';

export const OTP_LEN = 6;
const Otp = props => {
    const [otp, setOtp] = React.useState('');
    const [hasError, setHasError] = React.useState(false);
    const { step, formik } = React.useContext(AuthContext);

    React.useEffect(() => {
        if(otp.length === OTP_LEN) {

        }
    }, otp);

    return (
        <styled.AnimatedDiv currentStep={step} step={steps.otp}>
            <styled.OtpContainer>
                <OtpInput
                    value={otp}
                    isInputNum={true}
                    hasErrored={hasError}
                    shouldAutoFocus={true}
                    onChange={setOtp}
                    numInputs={OTP_LEN}
                    separator=""
                    inputStyle={{marginLeft: '5px', width: '30px', height: '30px'}}
                />
            </styled.OtpContainer>
        </styled.AnimatedDiv>
      
    )
}

export default Otp;