'use client';

import { useEffect, useState } from "react"

interface CleintOnlyProps {
    children: React.ReactNode;
}


const CleintOnly: React.FC<CleintOnlyProps> = ({children}) => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    },[]);

    if(!hasMounted){
        return null;
    }

  return (
    <>
        {children}
    </>
  )
}

export default CleintOnly;
