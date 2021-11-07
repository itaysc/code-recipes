import React from 'react';
import SelectGender from './SelectGender';
import { useFormik } from 'formik';
import {steps} from './consts';
import { Button } from '../../components';
import EnterPhone from './enterPhone';
import Otp from './otp';
import useTitleSelection from './useTitleSelection';
import * as styled from './styled';
import {useNavBarContext} from '../../components/navBar/useNavBarContext';
import { useTranslation } from '../../shared/i18n';
export const AuthContext = React.createContext(null);

const SignUpPage = props => {
    const { t } = useTranslation();
    const [step, setStep] = React.useState(steps.phone);
    const title = useTitleSelection(step);
    const {setBackButton} = useNavBarContext();
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
      React.useEffect(() => {
        //setBackButton(() => setStep(step -1));
      }, [step, setBackButton]);
      
      const nextStep = () => {
        setStep(step + 1);
      }

      const prevStep = () => {
        setStep(step -1);
      }

      const isBtnDisabled = () =>{
        switch (step) {
          case steps.selectGender: return !formik.values.gender;
          default: return false;
        }
      }
    return (
      <>
        <styled.Title>{title}</styled.Title>
        <styled.StepContent>
          <AuthContext.Provider value={{step, nextStep, prevStep, formik}}>
              <EnterPhone />
              <Otp />
              <SelectGender />
              <SelectGender selectInterestedIn={true}/>
              <styled.BottomButtonContainer>
                <Button disabled={isBtnDisabled()} onClick={nextStep} color={'crayola'}>{t('continue')}</Button>
              </styled.BottomButtonContainer>
          </AuthContext.Provider>
        </styled.StepContent>
      </>
    );
}
export default SignUpPage;
