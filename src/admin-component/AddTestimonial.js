import { BASE_URL } from "../env";
import { useState } from "react";

import style from "../asset/css/AddTestimonial.module.css";
function AddTestimonial() {
    const [name, setName] = useState("");
  const [ post, setPost] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [Active, setActive] = useState(false)

  const addTestimonial = async () => {
    console.log(image);
      const data={name,post,Description,Active};
      console.log("data",data);
    await fetch(BASE_URL + "/add-testimonial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(image);
        const formData=new FormData();
        formData.append('image',image)
        console.log(formData);
        fetch(`${BASE_URL}/uploadimg/${data?.testimonial?._id}`, {
            method: "PUT",
            body:formData,
          })
            .then((res) => res.json()).then((dt)=>{
                window.location.href="/dashboard"
                console.log(dt)})
      });
  };

  return (
    <>
      <div className={style.adminPage}>
        <div className={style.adminformCard}>
          <div className={style.adminCardHeading}>Add Testimonial</div>
          
            <input
              type="text"
              className={`form-control ${style.adminCardField}`}
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className={`form-control ${style.adminCardField}`}
              placeholder="Enter post"
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
            <input
              type="textarea"
              className={`form-control ${style.adminCardField}`}
              placeholder="Enter Description"
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="file"
              className={`form-control ${style.adminCardField}`}
              accept="image/*"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(e.target.files[0]);
              }}
            />
            <label className="form-check-label" for="disabledFieldsetCheck">
              <input
                type="checkbox"
                // className={`form-control`}
                value={Active}
                onChange={(e) => {
                  setActive(e.target.checked);
                }}
              />
              Active
            </label>
            <br /> <br />
            <button type="submit" className={`btn ${style.adminFormBtn}`} onClick={addTestimonial}>
              Submit
            </button>
        </div>
      </div>
    </>
  );
}

export default AddTestimonial;
