import { useLocation } from 'react-router-dom'

export const DettagliRepos = () => {
    const location = useLocation();
    const { from } = location.state;
    return (
         <div>
         <h1>{from.name} {from.surname}</h1></div>
         )}

