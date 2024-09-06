import UserDelete from "./UserDelete";
function UserTable({users, onDelete}){
    return(
        <table>
            <colgroup span="3"></colgroup>
            <thead>
                <th>Nombre:</th>
                <th>Email:</th>
                <th>Borrar:</th>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <UserDelete onDelete={onDelete}> userId={user.id}</UserDelete>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserTable;