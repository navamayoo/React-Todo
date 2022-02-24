import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class StudentService{

    create = async(student)=>{
        await axios({
            method:"POST",
            url: `${API_URL}student`,
            data:student
        }).catch((e)=>{
            const {message}= e.response.data;
            if(message.errorInfo) throw message.errorInfo[2];
            else throw e.message;
        });
    }

}

export default new StudentService();