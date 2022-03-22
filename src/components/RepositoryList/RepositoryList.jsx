import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";
import react from "react";
//SCSS
import '../../style/reposittory.scss'


export function RepositoryList() {
    let [RepositoryDTO, setRepositoryDTO] = useState([])

    useEffect(() => {
        window            
        fetch(process.env.APIGIT)
            .then(Response => Response.json())
            .then(
                (data) => {
                    setRepositoryDTO(data)
                    console.log(data)
            }
            )
    }, [])

 
    return (
        <div className="conteiner-repository-list">
            <section className="repository-list">
                <h1>List of Repository</h1>
                <ul>
                    {RepositoryDTO.map(rep => <RepositoryItem key={rep.name} data={rep} /> )}
                                      
                </ul>
                
                <button >teste</button>
            </section>
        </div>
    );
}