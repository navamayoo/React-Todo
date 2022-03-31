import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class CourseService{

    create = async(course)=>{
      await axios({
          method:"Post",
          url:`${API_URL}course`,
          data:course
      }).catch((e)=>{
          const {message}= e.response.data;
          if(message.errorInfo) throw message.errorInfo[2];
          else throw e.message;
      });
    };

    getAll = async()=>{
        try{
            const response = await axios({
                method:"GET",
                url:`${API_URL}course`
            });
            return response.data
        }catch(e){
            throw e.message;
        };
    }
}

export default new CourseService();