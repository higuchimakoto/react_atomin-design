import React, { useContext } from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../providers/UserProvider'
import { useSetRecoilState } from 'recoil'
import { userState } from '../../store/userState'

export const Top = () => {

    //指定したページに遷移するためにuseHistoryを使用する。 
    const history = useHistory();
    // const { setUserInfo } = useContext(UserContext)
    const setUserInfo = useSetRecoilState(userState)

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push('/users')
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false })
        history.push('/users')
    }

    return (
        <SContainer>
            <h2>TOPページです。</h2>
            
            <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>

    )
}

const SContainer = styled.div`
    text-align:center;
`