import { useForm } from "react-hook-form";
import { UpdateUserContainer, ButtonContainer } from "./styles";
import api from "../../services/api"

const EditUser = () => {

    const { register, handleSubmit } = useForm();

    

    const onSubmit = async (formData) => {

        try{
            await api.put(`/users/${formData.id}`, {
                name: `${formData.firstName}`,
                surname: `${formData.surname}`,
                role: `${formData.role}`,
                dateOfBirth: `${formData.dateOfBirth}`
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }     
            })
        }catch(err){
            console.log("Erro ao atualizar usuário" + err.message);
        }

        console.log(formData);
    };

    return(
        <UpdateUserContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("id") } type="text" placeholder="Id"/>
                <input {...register("firstName") } type="text" placeholder="Name"/>
                <input {...register("surname") } type="text" placeholder="Surname"/>
                <input {...register("role") } type="text" placeholder="Role"/>
                <input {...register("dateOfBirth") } type="text" placeholder="Date of Birth"/>
            
                <ButtonContainer>
                    <button type="submit" className="updateButton">Update</button>        
                </ButtonContainer>
            </form>
        </UpdateUserContainer>
    )
}

export default EditUser;