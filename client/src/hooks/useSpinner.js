import React from 'react';
import Loader from "react-loader-spinner";
import theme from '../theme';

const SpinnerContext = React.createContext(null);

const SpinnerProvider = ({children}) => {
    const [show, setShow] = React.useState(false);
    const showSpinner = () => {
        setShow(true);
    }
    const hideSpinner = () => {
        setShow(false);
    }
    return (
        <SpinnerContext.Provider value={{showSpinner, hideSpinner}}>
            {
                show && 
                <Loader
                    type="ThreeDots"
                    color={theme.colors.crayola}
                    height={100}
                    width={100}
                    timeout={0}
            />
            }
            {children}
        </SpinnerContext.Provider>
    )
}

export {
    SpinnerContext,
    SpinnerProvider,
}