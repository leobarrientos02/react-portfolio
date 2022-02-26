import { useEffect } from "react";

function Filter({ Projects, setFiltered, activeType, setActiveType }){
    
    useEffect(()=>{
        if(activeType === ""){
            setFiltered(Projects);
            return;
        }
        const filtered = Projects.filter((project) =>
            project.tech.includes(activeType)
        );
        setFiltered(filtered);
    }, [activeType, Projects, setFiltered]);
    return(
        <div className="filter-container">
            <button
                onClick={()=> setActiveType("React")}
            >
                React
            </button>
            <button
                onClick={()=> setActiveType("Javascript")}
            >
                JavaScript
            </button>
            <button
                onClick={()=> setActiveType("UX/UI")}
            >
                UX/UI
            </button>
            <button
                onClick={()=> setActiveType("")}
            >
                All
            </button>
        </div>
    );
}
export default Filter;