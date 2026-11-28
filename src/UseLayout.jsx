import { useLayoutEffect,useRef,useState } from "react";

export default function UseLayout(){
    const boxRef = useRef();
    const [width,setWidth] = useState(0);
    useLayoutEffect(() =>{
        const boxWidth = boxRef.current.offsetWidth;

        setWidth(boxWidth);
    },[]);

    return(
        <div className="container mt-4">
            <h2>UseLayout Effect Example</h2>

            <div 
                ref={boxRef}
                style={{
                    width:"300px",
                    height:"100px",
                    backgroundColor:"lightgreen"
                    
                }}

            >
                Hello Aishu!!
            </div>

            <h4>Box Width:{width}px</h4>
        </div>
    )
}