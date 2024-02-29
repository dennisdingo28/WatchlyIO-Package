"use client"

import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCountry } from "..";

export const WatchlyIOAnalytics = () =>{
    
    const {mutate: trackRoute, isPending} = useMutation({
        mutationFn: async(route: {path: string, country: {countryName: string, countryCode: string}}) =>{
            const res = await fetch(`http://localhost:3000/api/workspace?apiKey=${process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY}`, {
                method:"PATCH",
                body: JSON.stringify(route),
            });
            const jsonData = await res.json();

            return jsonData;
        }
    });

  useEffect(() => {
    trackRoute({path:window.location.pathname, country:getCountry()!});
  }, [window.location.pathname]);
  
    return (
        <div>
            COuntry: {getCountry()?.countryCode}
        </div>
    )
}