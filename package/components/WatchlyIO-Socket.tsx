"use client"

import { io } from "socket.io-client";
import { useSocket } from "../useSocket";
import { useEffect } from "react";
import { PREFIX, generateWatchlyIOUserIdentifier, getCountry } from "..";
import { useUserIdentifier } from "../useUserIdentifier";

export const WatchlyIOSocket = () =>{
    
    //socket
    const {socket, setSocket} = useSocket(state=>state);
    const {setUserIdentifier} = useUserIdentifier(state=>state);
    
    useEffect(()=>{

        //prefix
        const alreadyExists = localStorage.getItem(`${PREFIX}UserIdentifier`) || "";
        
        //country
        const country = getCountry();
        if(!alreadyExists){
            const watchlyIOUserIdentifier=generateWatchlyIOUserIdentifier();
            setUserIdentifier(watchlyIOUserIdentifier);
            
            if(!socket){
                const newSocket = io("https://watchlyio-server.onrender.com/workspaceUser",{query:{id: watchlyIOUserIdentifier, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY, country: country!.countryName, countryCode: country!.countryCode}});
                setSocket(newSocket);
            }
        }else{
            if(!socket){
                const newSocket = io("https://watchlyio-server.onrender.com/workspaceUser",{query:{id: alreadyExists, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY, country: country!.countryName, countryCode: country!.countryCode}});
                setSocket(newSocket);
            }
        }

    },[]);

    useEffect(()=>{

        if(!socket) return;

        socket.emit("current-route",{route:window.location.pathname});
    
      },[window, window.location, window.location.pathname,socket, setSocket]);

    return null;
}