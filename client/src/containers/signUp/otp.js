import React from 'react';
import OtpInput from 'react-otp-input';
import * as styled from './styled';
import {steps} from './consts';
import { AuthContext } from '../signUp';
import { SpinnerContext } from '../../hooks/useSpinner';
import { useAuthTranslation } from '../../shared/i18n';

export const OTP_LEN = 6;
const Otp = props => {
    const [otp, setOtp] = React.useState('');
    const [hasError, setHasError] = React.useState(false);
    const { step, checkOtp, nextStep } = React.useContext(AuthContext);
    const { showSpinner, hideSpinner } = React.useContext(SpinnerContext);
    const { t: authT } = useAuthTranslation();
    React.useEffect(() => {
        if(otp.length === OTP_LEN) {
            const isOk = checkOtp(otp);
            if(isOk) {
                return nextStep();
            }
            setOtp('');
            setHasError(true);
        }
    }, [otp]);

    return (
        <styled.AnimatedDiv currentStep={step} step={steps.otp}>
            <styled.OtpError show={hasError}>{authT('invalid_otp')}</styled.OtpError>
            <styled.OtpContainer>
                <OtpInput
                    value={otp}
                    isInputNum={true}
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