import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'
import MinimalLayout from 'layout/MinimalLayout'
import NavigationScroll from 'layout/NavigationScroll'
import KeywordsPage from 'views/keywords'

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')))
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')))
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')))
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')))
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')))
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')))
const SamplePage = Loadable(lazy(() => import('views/sample-page')))

const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')))
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')))

export default function RoutesWrapped() {
  return (
    <BrowserRouter>
      <NavigationScroll>
        <Routes>
          <Route path="/" element={<MinimalLayout />}>
            <Route path="login" element={<AuthLogin3 />} />
            <Route path="register" element={<AuthRegister3 />} />
          </Route>
          <Route path="dashboard" element={<MainLayout />}>
            <Route index element={<DashboardDefault />} />
            <Route path="keywords" element={<KeywordsPage />} />
            <Route path="utils/util-typography" element={<UtilsTypography />} />
            <Route path="utils/util-color" element={<UtilsColor />} />
            <Route path="utils/util-shadow" element={<UtilsShadow />} />
            <Route path="icons/tabler-icons" element={<UtilsTablerIcons />} />
            <Route path="icons/material-icons" element={<UtilsMaterialIcons />} />
            <Route path="sample-page" element={<SamplePage />} />
          </Route>
        </Routes>
      </NavigationScroll>
    </BrowserRouter>
  )
}
