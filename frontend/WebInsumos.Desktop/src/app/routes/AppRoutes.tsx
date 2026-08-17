import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/home/HomePage'
import { ProductCreatePage } from '@/pages/produtos/ProductCreatePage'
import { ProductsPage } from '@/pages/produtos/ProductsPage'
import { FirstAccessPage } from '@/pages/auth/FirstAccessPage'
import { ForgotPasswordPage } from '@/pages/auth/ForgotPasswordPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage'
export function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/" element={<LoginPage />} />

      <Route
        path="/primeiro-acesso" element={<FirstAccessPage />} />
      <Route
        path="/esqueceu-senha" element={<ForgotPasswordPage />} />
      <Route
        path="/renovar-senha" element={<ResetPasswordPage />} />
      <Route
        path="/home" element={<HomePage />}/>
      <Route
        path="/produtos" element={<ProductsPage />}/>

      <Route
        path="/produtos/novo" element={<ProductCreatePage />}/>
    </Routes>
  )
}