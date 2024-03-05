"use client"

import { useEffect } from "react";
import { PREFIX } from "..";
import { useSocket } from "../useSocket";

export const WatchlyIOUserIdentifier = () =>{
    const {socket} = useSocket(state=>state);

    useEffect(()=>{
        addEventListener("storage",(event)=>{
            console.log(event);
            
            if(!socket) return;

            if(event.key===`${PREFIX}UserIdentifier`){
                if(event.oldValue!==event.newValue){
                    
                    
                    socket.emit("identifier-deprecated", {id: event.oldValue});
                }
            }else{
                socket.emit("identifier-deprecated", {id: event.oldValue});
            }
        });

        return ()=>{
            removeEventListener("storage",()=>{});
        }
    },[socket]);
    
    return null;
}