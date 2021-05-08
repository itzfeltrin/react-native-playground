import styled from 'styled-components/native';

export const Switches = styled.View`
    flex-direction: row;
    padding: 0 12px;
`;

export const Switch = styled.TouchableOpacity`
    flex: 1;
    height: 64px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 12px;
    elevation: 12;
`;

export const SwitchText = styled.Text`
    font-weight: bold;
    color: #363636;
    font-size: 16px;
    letter-spacing: 1px;
`;

export const Contents = styled.View`
    flex: 1;
    margin: 12px;
    margin-top: 16px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    background-color: #fff;
    padding: 16px;
    border-radius: 12px;
    elevation: 4;
`;

export const ContentTitle = styled.Text`
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
`;

export const ContentText = styled.Text`
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 19px;
    color: #000;
    text-align: justify;
`;
