import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: ${props => props.maxWidth}px;
    padding: 0 20px;
    margin: 0 auto;
`;

Wrapper.defaultProps = {
    maxWidth: 960
}
