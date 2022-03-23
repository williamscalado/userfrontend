import { Repository } from "./type";

export function RepositoryItem(props: {data: Repository}) {
    return (
        <li>
            <p><strong>{props?.data.owner.login}</strong></p>
            <strong>{props?.data.name ?? 'My Repository'}</strong>
            <p>{props.data.description || 'No description'}</p>

            <a href={props?.data.html_url || '#'} target="_blank">
                Acessar Link
            </a>
        </li>
    );
     
}