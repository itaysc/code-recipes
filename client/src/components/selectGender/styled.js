import styled from 'styled-components';
import theme from '../../theme';
import * as componentStyles from '../styled';
import MaterialIcon from '../MaterialIcon';

export const SelectGenderContainer = styled(componentStyles.VCenterBox)`
    width: 130px;
    height: 150px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.6s;
    background-color: ${p=> p.selected? theme.colors.black: 'transparent'};
    color: ${p=> p.selected? theme.colors.ghostStrong: theme.colors.black};
    font-size: ${theme.fontSize.large};
    border: 1px solid ${p=>p.selected? theme.colors.ghostStrong: theme.ghostStrong};
    box-shadow: 5px 10px 10px -3px ${theme.colors.ghostStrong};
    &:hover{
        background-color: ${theme.colors.black};
        color: ${theme.colors.ghostStrong};
    }
    ${theme.screen.notMobile} {
        //margin-right: 100px;
    }
`;

export const GendersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    ${theme.screen.notMobile} {
        justify-content: center;
        ${SelectGenderContainer}:nth-child(2){
            margin-left: 100px;
        }
    }
`;

export const GenderIcon = styled(MaterialIcon)`
    font-size: 60px;
    cursor: pointer;
    &:hover{
        
    }
`;