import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
function UserTable({users, onDelete, Edit}){
    return(
        <table>
            <colgroup span="4"></colgroup>
            <thead>
                <th>Nombre:</th>
                <th>Email:</th>
                <th>Editar</th>
                <th>Borrar:</th>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><UserEdit edit={Edit}></UserEdit></td>
                        <td><UserDelete onDelete={onDelete} userId={user.id}></UserDelete></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserTable;