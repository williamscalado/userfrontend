import { RepositoryItem } from "./RepositoryItem";

const RepositoryDTO = {
    name: "Williams Calado",
    description: "React",
    link: "www.google.com.br"
}


export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>List</h1>
            <ul>
                <RepositoryItem data={RepositoryDTO} />
                <RepositoryItem data={RepositoryDTO} />
                <RepositoryItem data={RepositoryDTO} />
                <RepositoryItem data={RepositoryDTO} />
            </ul>

        </section>
    );
}