import { BASE_URL } from "../env";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import style from "../asset/css/AddTestimonial.module.css";
function TestimonialCard(props) {
  //     const [name, setName] = useState("");
  //   const [ post, setPost] = useState("");
  //   const [Description, setDescription] = useState("");
  //   const [image, setImage] = useState("");
  const [dataall, setDataall] = useState([]);
  
  useEffect(() => {
      console.log(props)
    fetch(BASE_URL + "/get-testimonial"+props?.query, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataall(data?.testimonial);
      });
  }, [props]);
  const deleteTestimonial=(id) =>{
  
    fetch(BASE_URL + "/delete-testimonial?_id="+id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          window.location.reload();
         
        });
  }
///delete-testimonial
  return (
    <div className="d-flex justify-content-center flex-wrap my-3">
      {dataall.map((val,i) => {
        return(<div className="card mx-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={val?.photo?.link} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{val?.name}</h5>
            <p className="card-text">
             {val?.Description}
            </p>
          </div>

          <div className="card-body">
            <Link to={`/updatetestimonial/${val?._id}`} className="btn btn-block btn-success mx-2">
              Update
            </Link>
            <button  className="btn btn-block btn-danger mx-2" onClick={(e)=>{deleteTestimonial(val._id)}}>
              Delete
            </button>
          </div>
        </div>);
      })}{" "}
    </div>
  );
}

export default TestimonialCard;
