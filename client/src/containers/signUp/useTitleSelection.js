import React from 'react';
import {useAuthTranslation} from '../../shared/i18n';
import {steps} from './consts';
import { OTP_LEN } from './otp';

const useTitleSelection = (step) => {
    const {t} = useAuthTranslation();
    if(step === steps.phone) {
        return t('enter_your_phone');
    }
    if(step === steps.otp) {
        return t('enter_otp', {length: OTP_LEN});
    }
    if(step === steps.selectGender) {
        return t('select_gender_txt');
    }
    if(step === steps.selectInterestedIn) {
        return t('select_interested_in_txt');
    }

    return "";
}

export default useTitleSelection;