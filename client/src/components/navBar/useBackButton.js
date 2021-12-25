import React from 'react';
import { useNavBarContext } from './useNavBarContext';

const useBackButton = (action) => {
    const context = useNavBarContext();

    React.useEffect(() => {
        context.setBackButtonAction(action);
        return (() => context.setBackButtonAction(null))
    }, [action])
}

export default useBackButton;