import styled, {css} from 'styled-components/native';

interface ContainerProps {
    padding?: number;
}

const Container = styled.View<ContainerProps>`
    ${({theme: {colors}, padding = 16}) => css`
        flex: 1;
        background-color: ${colors.bg};
        padding: ${padding}px;
    `}
`;

export default Container;
