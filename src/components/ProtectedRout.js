import { Navigate } from "react-router-dom"

export const ProtectedRoute =({element: Component, isLogIn, ...props}) => {
return (
  isLogIn ? <Component {...props} /> : <Navigate to = "/sign-up" replace />
)
}