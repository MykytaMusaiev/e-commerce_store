"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD"
  });

interface CurrencyProps{
    value?: string | number;
}

const Currency:React.FC<CurrencyProps> = ({
    value
}) => {

    {/* fix hydration error start */}
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
        return null;
    }
    {/* fix hydration error end */}

    return ( 
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;