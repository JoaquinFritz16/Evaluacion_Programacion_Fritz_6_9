import axios from "axios";

function UserDelete({ userId, onDelete }) {
    const db = "http://localhost:3004";

    const handleDelete = () => {
        console.log(userId);
        axios.delete(`${db}/usuario/${userId}`)
            .then(() => onDelete(userId))
            .catch(error => {
                console.error(error); 
            });
    };

    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
}


export default UserDelete;
