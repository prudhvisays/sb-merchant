import styled from 'styled-components'

const TabStyles = styled.div`
    .accord {
        padding: 0 3em;
        overflow-y: scroll;
        height: 75vh;
        @media (max-width: 500px) {
            height: 68vh;
        }
        &::-webkit-scrollbar {
          width: 3px;
        }
        
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(144, 153, 183, 0.35);
            border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(144, 153, 183, 0.35);
        }
    }
 `;

export default TabStyles;
