import React, { createContext, useState } from 'react'

// ReactのcreateContextメソッドを使用して新しいコンテキストを作成する。
export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props

    const [userInfo, setUserInfo] = useState(null)

    return (
        // コンテキストはProviderというものを持っている。
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}