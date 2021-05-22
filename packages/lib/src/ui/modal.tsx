import React from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components'
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
`
const Dialog = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255);
`

type Deps = {
    modalContainer: () => HTMLElement;
}

export default ({modalContainer}: Deps) =>
function Modal({isOpened, children, ...props}: {
    isOpened: boolean;
    children: unknown;
    className?: string;
}) {
    return isOpened && createPortal(<Overlay>
        <Dialog {...props}>
            {children}
        </Dialog>
    </Overlay>, modalContainer()) || ''
}