import React from 'react';
import {useTranslation} from '../../shared/i18n';
const NavBarContext = React.createContext(null);

const NavBarProvider = ({children}) => {
    const [showBackButton, setShowBackButton] = React.useState(false);
    const [backButtonAction, _setBackButtonAction] = React.useState(undefined);
    const {t} = useTranslation();
    const [title, setTitle] = React.useState(t('foozool'));

    const setBackButtonAction = (action=null) =>{
        if(!action) {
            setShowBackButton(false);
            _setBackButtonAction(undefined);
        } else {
            setShowBackButton(true);
            _setBackButtonAction(action);
        }
    }
    return (
        <NavBarContext.Provider value={{
            showBackButton, 
            setShowBackButton,
            backButtonAction,
            setBackButtonAction,
            title,
            setTitle,
            }}>
            {children}
        </NavBarContext.Provider>
    )
};
export const useNavBarContext = () => React.useContext(NavBarContext)

export {
    NavBarProvider,
}