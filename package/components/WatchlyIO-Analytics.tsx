"use client"

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCountry } from "..";
import { useSocket } from "../useSocket";

export const WatchlyIOAnalytics = () =>{
    const {socket, setSocket} = useSocket(state=>state);
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

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

    useEffect(()=>{
        setCurrentRoute(window.location.pathname)
    }, [window, window.location, window.location.pathname, window.location.href]);

  useEffect(() => {
    trackRoute({path:currentRoute, country:getCountry()!});
  }, [currentRoute]);
  

  useEffect(()=>{
    
    if(!socket) return;

    socket.emit("current-route",{route:currentRoute});

  },[currentRoute, socket, setSocket]);

    return (
        <div>
            COuntry: {getCountry()?.countryCode}
        </div>
    )
}