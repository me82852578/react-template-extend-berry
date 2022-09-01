import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axiosInstance, { verifyTokenApiConf } from 'api'

const verifyToken = async (data) => {
  const res = await axiosInstance({ ...verifyTokenApiConf, data })
  return res.data
}
function PrivateRoutes() {
  const location = useLocation()
  const navigate = useNavigate()

  const { mutate } = useMutation(verifyToken, {
    onSuccess: () => {},
    onError: () => {
      navigate('/login', { replace: true, state: { from: location } })
    },
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login', { replace: true, state: { from: location } })
    }
    mutate({ token })
  }, [location, mutate, navigate])

  return <Outlet />
}

export default PrivateRoutes
