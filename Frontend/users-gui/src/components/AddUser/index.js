import { useForm } from "react-hook-form";
import { AddUserContainer, ButtonContainer } from "./styles";
import api from "../../services/api"

const AddUser = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {

        await api.post('/users', {
            name: `${formData.firstName}`,
            surname: `${formData.surname}`,
            role: `${formData.role}`,
            dateOfBirth: `${formData.dateOfBirth}`
        }, {
            headers: {
                'Content-Type': 'application/json'
            }     
        })
  
        console.log(formData);
    };

    return(
        <AddUserContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName") } type="text" placeholder="Name"/>
                <input {...register("surname") } type="text" placeholder="Surname"/>
                <input {...register("role") } type="text" placeholder="Role"/>
                <input {...register("dateOfBirth") } type="text" placeholder="Date of Birth"/>
            
                <ButtonContainer>
                    <button type="submit" className="addButton">Add</button>        
                </ButtonContainer>
            </form>
        </AddUserContainer>
    )
}

export default AddUser;