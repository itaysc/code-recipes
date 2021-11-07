import React from 'react';
import PhoneInput from 'react-phone-input-2'
import * as styled from './styled';
import {steps} from './consts';
import { AuthContext } from '../signUp';

const EnterPhone = props => {
    const { step, formik } = React.useContext(AuthContext);
    const userLocale = navigator.language || navigator.userLanguage; 
    const defaultCountry = userLocale.split('-')[1].toLowerCase();
    const _onChange = (phone) => {
        formik.setFieldValue('phone', phone);
    }

    return (
        <styled.AnimatedDiv currentStep={step} step={steps.phone}>
            <styled.PhoneNoContainer>
                <PhoneInput
                    country={defaultCountry}
                    value={formik.values.phone}
                    enableSearch={true}
                    onChange={_onChange}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                />
            </styled.PhoneNoContainer>
        </styled.AnimatedDiv> 
    )
}

export default EnterPhone;