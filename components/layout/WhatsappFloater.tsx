"use client";
import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappFloater() {
    return (
        <FloatingWhatsApp
            phoneNumber="+2348115546052"
            accountName="NeedHomes"
            chatMessage="Hi, We are NeedHomes. How can we help you?"
            style={{ fontSize: "2rem", fontFamily: "inherit", fontWeight: "500", height: "unset" }}
            avatar="/logo/app_icon.png"
            allowEsc
            darkMode
        />
    )
}
