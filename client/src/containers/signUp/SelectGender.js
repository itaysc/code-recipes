import React from 'react';
import * as styled from './styled';
import {steps} from './consts';
import { SelectGender, SelectOtherGender } from '../../components';
import { useTranslation } from '../../shared/i18n';
import { AuthContext } from '../signUp';

const SelectGenderContainer = ({selectInterestedIn}) => {
    const [showOtherOptions, setShowOtherOptions] = React.useState(false);
    const { t } = useTranslation();
    const { step, formik } = React.useContext(AuthContext);

    const setValue = (gender) => {
        formik.setFieldValue(selectInterestedIn? 'interestedIn'  : 'gender', gender);
    }


    const value = selectInterestedIn? formik.values.interestedIn :formik.values.gender;
    return (
        <styled.AnimatedDiv currentStep={step} step={selectInterestedIn? steps.selectInterestedIn:steps.selectGender}>
            {
                !showOtherOptions && 
                <>
                    <SelectGender onSelect={setValue} value={value}/>
                    <styled.OtherGenderOptions onClick={()=> setShowOtherOptions(true)}>
                        {t('other_options')}
                    </styled.OtherGenderOptions>
                </>
            }
            {
                showOtherOptions && 
                <SelectOtherGender value={value} onSelect={setValue}/>
            }
        
          
        </styled.AnimatedDiv> 
    )
}

export default SelectGenderContainer;