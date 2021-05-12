import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Top } from '../pages/Top'
import { Users } from '../pages/Users'
import { DefaultLayout } from '../templates/DefaultLayout'
import { HeaderOnly } from '../templates/HeaderOnly'

export const Router = () => {
    return (
        <BrowserRouter>
            {/* 出しわけはスイッチを使う */}
            <Switch>
                {/* 実際に一致させる部分はRouteを使用する。 */}
                <Route exact path='/'>
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>
                <Route path='/users'>
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
