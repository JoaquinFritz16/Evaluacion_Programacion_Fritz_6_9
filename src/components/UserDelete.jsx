import axios from "axios";
function UserDelete({userId, onDelete}) {
    const db = "http://localhost:3004"
    const handleDelete = () => {
        axios.delete(`${db}/usuario`)
        .then(()=> {
                onDelete(userId);
                console.log("Usuario Borrado")
            })
    }
    return(
        <>
        <button onClick={handleDelete}>Borrar</button>
        </>
    )
}
export default UserDelete;