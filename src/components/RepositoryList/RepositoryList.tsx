import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";
import react from "react";
//SCSS
import { Repository } from "./type";
import '../../style/reposittory.scss'


export function RepositoryList() {

    let [RepositoryDTO, setRepositoryDTO] = useState([])

    useEffect(() => {
        window
        const urlGit: any = process.env.APIGIT
        fetch(urlGit)
            .then(Response => Response.json())
            .then(
                (data) => {
                    setRepositoryDTO(data)
                }
            )
    }, [])


    return (
        <div className="conteiner-repository-list">
            <section className="repository-list">
                <h1>List of Repository</h1>
                <ul>
                    {RepositoryDTO.map(
                        (rep) => { 
                            const dataRep: Repository = rep
                            return <RepositoryItem key={dataRep.name}  data={dataRep} />
                    })}

                </ul>

                <button >teste</button>
            </section>
        </div>
    );
}