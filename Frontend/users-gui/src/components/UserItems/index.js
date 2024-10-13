import { UserItemsContainer} from "./styles"


const UserItems = ({user, handleDelete}) =>{
    return (
        <UserItemsContainer>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Role</th>
                    <th>Date of Birth</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.role}</td>
                    <td>{user.dateOfBirth}</td>
                    <td><button className="removeButton" onClick={handleDelete}>Remove</button></td>
                </tr>
            </tbody>
        </UserItemsContainer>
    )
}

export default UserItems