import type { createPortal } from 'react-dom'
import React from 'react'
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
    createPortal: typeof createPortal;
    modalContainer: () => HTMLElement;
}

export default ({modalContainer, createPortal}: Deps) =>
function Modal({isOpened, children, ...props}: {
    isOpened: boolean;
    children: unknown;
    className?: string;
}) {
    return isOpened && createPortal(<Overlay>
        <Dialog {...props}>
            {children}
        </Dialog>
    </Overlay>, modalContainer()) || <></>
}