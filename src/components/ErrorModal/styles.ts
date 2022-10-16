import styled, { keyframes } from "styled-components";
import { ContainerColumn } from "../../assets/containers";

const isVisibleEffect = keyframes`
   0% {
      opacity: 0;
      right: 1rem;
      top: 0;
   }
   20%, 80% {
      opacity: 1;
      right: 1rem;
      top: 1rem;
   }
   100% {
      opacity: 0;
      right: 1rem;
      top: 0rem;
   }
`

const timeLineEffect = keyframes`
   from {
      background-color: #ffb000;
      width: 100%;
   }
   to {
      width: 0%;
   }
`

export const Container = styled(ContainerColumn)`
   animation-name: ${isVisibleEffect};
   animation-duration: 5s;
   border: 0.1rem solid var(--gray-400);
   border-radius: 5px;
   color: var(--red);
   font-size: 1rem;
   max-width: 20rem;
   opacity: 1;
   position: fixed;
   right: 1rem;
   top: 1rem;
`

export const FlexController = styled.div`
   align-items: center;
   box-shadow: 4px 4px 8px var(--gray-800);
   display: flex;
   height: 100%;
   justify-content: center;
   padding:  0.8rem;
   position: relative;
   width: 100%;
`

export const Title = styled.span`
   font-size: 1rem;
   width: 100%;
`

export const TimeLine = styled.span`
   animation-name: ${timeLineEffect};
   animation-duration: 5s;
   border-radius: 20px;
   bottom: 0;
   height: 2px;
   left: 0;
   position: absolute;
`
