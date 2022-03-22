export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props?.data?.name ?? 'Default'}</strong>
            <p>{props.data?.description || 'No description'}</p>
            <a href={props.data?.link || '#'}>
                Acessar Link
            </a>
        </li>
    );
     
}