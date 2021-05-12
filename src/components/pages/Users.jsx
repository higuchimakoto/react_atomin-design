import React, { useContext } from 'react'
import styled from 'styled-components'

import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { UserContext } from '../../providers/UserProvider'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

const users = [...Array(10).keys()].map((val) => {

    return {
        id: val,
        name: `樋口信-${val}`,
        image: 'https://source.unsplash.com/NE0XGVKTmcA',
        email: 'higuchimakoto1121@gmail.com',
        phone: '080-6313-5203',
        company: {
            name: 'テスト株式会社',
        },
        website: 'http://google.com',
    }
})

export const Users = () => {
    // const { userInfo, setUserInfo } = useContext(UserContext)
    const [userInfo, setUserInfo] = useRecoilState(userState)

    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })

    return (
        <SContainer>
            <h2>ユーザー一覧ページです。</h2>
            <SearchInput />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {
                    users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:24px;
`

const SUserArea = styled.div`
    padding-top:40px;
    width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    grid-gap:20px;
`