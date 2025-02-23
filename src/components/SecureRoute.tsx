import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { redirect } from "react-router";

type SecureRouteProps = {
    children: React.ReactNode;
};
export default function SecureRoute({ children } : SecureRouteProps) {
    const { isAuthenticated, isLoaded } = useSelector((state: RootState) => state.session);
    if (isLoaded && !isAuthenticated) {
      return redirect("/auth");
    }
    return isAuthenticated ? <>{children}</> : null;
}

