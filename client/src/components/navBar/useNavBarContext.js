import React from 'react';
import {useTranslation} from '../../shared/i18n';
const NavBarContext = React.createContext(null);

const NavBarProvider = ({children}) => {
    const [showBackButton, setShowBackButton] = React.useState(false);
    const [backBtnAction, setBackBtnAction] = React.useState(undefined);
    const {t} = useTranslation();
    const [title, setTitle] = React.useState(t('foozool'));

    const setBackButton = (action=null) =>{
        if(!action) {
            setShowBackButton(false);
            setBackBtnAction(undefined);
        } else {
            setShowBackButton(true);
            setBackBtnAction(action);
        }
    }
    return (
        <NavBarContext.Provider value={{
            showBackButton, 
            setShowBackButton,
            setBackButton,
            title,
            setTitle,
            backBtnAction,
            }}>
            {children}
        </NavBarContext.Provider>
    )
};
export const useNavBarContext = () => React.useContext(NavBarContext)

export {
    NavBarProvider,
}