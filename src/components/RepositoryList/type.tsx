export interface Repository    {
    
    name: string,
    description: string,
    owner: {
        login: string
    },
    html_url: string
}