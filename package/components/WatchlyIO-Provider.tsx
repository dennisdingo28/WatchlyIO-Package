"use client"
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const WatchlyIOProvider = ({children}: {children: React.ReactNode}) =>{
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>
    )
}