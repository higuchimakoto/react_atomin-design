import styled from 'styled-components'
import { BaseButton } from './BaseButton'

// このボタンはなんなのかの意味を考えておく必要がある。
export const SecondaryButton = (props) => {
    const { children, onClick } = props;
    return (
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color:#11999e;
`