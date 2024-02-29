"use client"

import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export const WatchlyIOAnalytics = () =>{
    
    const {mutate: trackRoute, isPending} = useMutation({
        mutationFn: async(path: string) =>{
            const res = await fetch(`http://localhost:3000/api/workspace?apiKey=${process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY}`, {
                method:"PATCH",
                body: JSON.stringify({path: path}),
            });
            const jsonData = await res.json();

            return jsonData;
        }
    });

  useEffect(() => {
    trackRoute(window.location.pathname);
  }, [window.location.pathname]);
  
    return (
        <div>
            analytics
        </div>
    )
}