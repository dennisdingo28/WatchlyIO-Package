"use client"

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCountry } from "..";
import { useSocket } from "../useSocket";
import { usePathname } from "next/navigation";

export const WatchlyIOAnalytics = () =>{
    const {socket, setSocket} = useSocket(state=>state);
    const path = usePathname();

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
    trackRoute({path:path, country:getCountry()!});
  }, [path]);
  

  useEffect(()=>{
    if(!socket) return;

    socket.emit("current-route",{route:path});

  },[path, socket, setSocket]);

    return (
        <div>
            COuntry: {getCountry()?.countryCode}
        </div>
    )
}