import React from 'react';
import propTypes from 'prop-types';
import * as styled from './styled';
import { useTranslation } from '../../shared/i18n';

const SelectGender = ({
    onSelect,
    value,
}) => {
    const { t } = useTranslation();
    const setValue = (gender) => {
        onSelect && onSelect(gender);
    }
    const isSelected = (desiredGender) => {
        return desiredGender === value;
    }

    return (
        <styled.GendersContainer>
            <styled.SelectGenderContainer 
                onClick={setValue.bind(null, 'male')} 
                selected={isSelected('male')}>
                <styled.GenderIcon>male</styled.GenderIcon>
                <span>{t('male')}</span>
            </styled.SelectGenderContainer>
            <styled.SelectGenderContainer 
                onClick={setValue.bind(null, 'female')}  
                selected={isSelected('female')}>
                <styled.GenderIcon>female</styled.GenderIcon>
                <span>{t('female')}</span>
            </styled.SelectGenderContainer>
        </styled.GendersContainer>
    )
}

SelectGender.propTypes = {
    onSelect: propTypes.func,
    value: propTypes.string,
}

export default SelectGender;