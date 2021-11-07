import React from 'react';
import propTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import theme from '../../theme';
import { useTranslation } from '../../shared/i18n';
const menuItemStyle = {fontSize: theme.fontSize.medium};
const SelectOtherGender = ({
    value,
    onSelect
}) => {

    const { t } = useTranslation();
    const _onSelect = (e) => {
        return onSelect && onSelect(e.target.value);
    }
    return (
        <>
            <FormControl variant="filled">
            <InputLabel style={menuItemStyle} id='select-other-helper'>{t('select_other_option')}</InputLabel>
                <Select
                    style={menuItemStyle}
                    value={value}
                    labelId='select-other-helper'
                    label='select-other-helper'
                    onChange={_onSelect}>
                    <MenuItem style={menuItemStyle} value={'male'}>Male</MenuItem>
                    <MenuItem style={menuItemStyle} value={'female'}>Female</MenuItem>
                    <MenuItem style={menuItemStyle} value={'trans_man'}>Trans Man</MenuItem>
                    <MenuItem style={menuItemStyle} value={'trans_woman'}>Trans Woman</MenuItem>
                    <MenuItem style={menuItemStyle} value={'agender'}>Agender</MenuItem>
                    <MenuItem style={menuItemStyle} value={'androgyne'}>Androgyne</MenuItem>
                    <MenuItem style={menuItemStyle} value={'bigender'}>Bigender</MenuItem>
                    <MenuItem style={menuItemStyle} value={'cis_man'}>Cis Man</MenuItem>
                    <MenuItem style={menuItemStyle} value={'cis_woman'}>Cis Woman</MenuItem>
                    <MenuItem style={menuItemStyle} value={'genderfluid'}>Genderfluid</MenuItem>
                    <MenuItem style={menuItemStyle} value={'gender_outlaw'}>Gender Outlaw</MenuItem>
                    <MenuItem style={menuItemStyle} value={'genderqueer'}>Genderqueer</MenuItem>
                    <MenuItem style={menuItemStyle} value={'nonbinary'}>Nonbinary</MenuItem>
                    <MenuItem style={menuItemStyle} value={'omnigender'}>Omnigender</MenuItem>
                    <MenuItem style={menuItemStyle} value={'polygender'}>Polygender</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}
SelectOtherGender.propTypes = {
    value: propTypes.string,
    onSelect: propTypes.func,
}
export default SelectOtherGender;