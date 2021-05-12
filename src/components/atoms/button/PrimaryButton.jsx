import React from 'react'
import styled from 'styled-components'
import {BaseButton} from './BaseButton'

// このボタンはなんなのかの意味を考えておく必要がある。
export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    )
}

// 上書きする場合は（）で囲む
const SButton = styled(BaseButton)`
    background-color:#40514e;
`