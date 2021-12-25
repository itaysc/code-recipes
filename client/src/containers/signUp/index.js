import React from 'react';
import SelectGender from './SelectGender';
import { useFormik } from 'formik';
import { phone } from 'phone';
import {steps} from './consts';
import { Button } from '../../components';
import EnterPhone from './enterPhone';
import Otp from './otp';
import useBackButton from '../../components/navBar/useBackButton';
import useTitleSelection from './useTitleSelection';
import * as styled from './styled';
import { useTranslation } from '../../shared/i18n';
export const AuthContext = React.createContext(null);

const SignUpPage = props => {
    const { t } = useTranslation();
    const [step, setStep] = React.useState(steps.phone);
    const title = useTitleSelection(step);
    const nextStep = () => {
      setStep(step + 1);
    }

    const prevStep = () => {
      setStep(step -1);
    }
    
    // useBackButton(prevStep);
    
    const formik = useFormik({
        initialValues: {
          phone: '',
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          gender: '',
          interestedIn: '',
        },
        onSubmit: values => {
          
        },
      });
    
      const checkOtp = (otp) => {
        return true;
      }
      const isBtnDisabled = () =>{
        switch (step) {
          case steps.phone: return !phone('+' + formik.values.phone).isValid;
          case steps.otp: return true;
          case steps.selectGender: return !formik.values.gender;
          case steps.selectInterestedIn: return !formik.values.interestedIn;
          default: return false;
        }
      }
    return (
      <>
        <styled.Title>{title}</styled.Title>
        <styled.StepContent>
          <AuthContext.Provider value={{step, nextStep, prevStep, checkOtp, formik}}>
              <EnterPhone />
              <Otp />
              <SelectGender />
              <SelectGender selectInterestedIn={true}/>
              <styled.BottomButtonContainer>
                <Button disabled={isBtnDisabled()} onClick={nextStep} isMobileMainBtn={true} color={'crayola'}>{t('continue')}</Button>
              </styled.BottomButtonContainer>
          </AuthContext.Provider>
        </styled.StepContent>
      </>
    );
}
export default SignUpPage;
