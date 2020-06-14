import React from 'react';
import { useParams } from "react-router-dom";

export default function Country() {
    const { code } = useParams()
    return (
        <div>
            <script type="text/javascript" src="https://embed.thevirustracker.com/embed.js"></script>
            <div className="thevirustracker-widget" data-ccountryid={code} data-base="ALLDATA"></div>
        </div>
    )
}