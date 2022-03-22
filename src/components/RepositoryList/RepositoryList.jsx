import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>List</h1>
            <ul>
               <RepositoryItem/>
               <RepositoryItem/>
               <RepositoryItem/>
               <RepositoryItem/>
               
            </ul>

        </section>
    );
}