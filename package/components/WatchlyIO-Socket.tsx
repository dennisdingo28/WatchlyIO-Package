"use client"

import { io } from "socket.io-client";
import { useSocket } from "../useSocket";
import { useEffect } from "react";
import { PREFIX, generateWatchlyIOUserIdentifier } from "..";

export const WatchlyIOSocket = () =>{
    
    const {socket, setSocket} = useSocket(state=>state);
    
    useEffect(()=>{

        const alreadyExists = localStorage.getItem(`${PREFIX}UserIdentifier`) || "";
        
        if(!alreadyExists){
            const watchlyIOUserIdentifier=generateWatchlyIOUserIdentifier();
            
            if(!socket){
                const newSocket = io("http://localhost:3002",{query:{id: watchlyIOUserIdentifier, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY}});
                setSocket(newSocket);
            }
        }else{
            if(!socket){
                const newSocket = io("http://localhost:3002",{query:{id: alreadyExists, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY}});
                setSocket(newSocket);
            }
        }
        

    },[]);

    return null;
}