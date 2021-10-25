import { BASE_URL } from "../env";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../asset/css/AddTestimonial.module.css";
function UpdateTestimonial() {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [Description, setDescription] = useState("");
  const [Active, setActive] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`${BASE_URL}/get-testimonial?_id=${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.testimonial[0].photo.name);
        setName(data?.testimonial[0]?.name);
        setPost(data?.testimonial[0]?.post);
        setDescription(data?.testimonial[0]?.Description);

        setActive(data?.testimonial[0]?.Active);
      })
      .catch((err) => console.error(err));
  }, [id]);
  const updateTestimonial = async () => {
    const data = { name, post, Description, Active };
    console.log("data", data);
    await fetch(BASE_URL + "/update-byquery?_id=" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/dashboard";
      });
  };

  return (
    <>
      <div className={style.adminPage}>
        <div className={style.adminformCard}>
          <div className={style.adminCardHeading}>Update Testimonial</div>
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
          <label className="form-check-label" for="disabledFieldsetCheck">
            <input
              type="checkbox"
              checked={Active}
              // className={`form-control`}
              value={Active}
              onChange={(e) => {
                setActive(e.target.checked);
              }}
            />
            Active
          </label>
          <br /> <br />
          <button
            type="submit"
            className={`btn ${style.adminFormBtn}`}
            onClick={updateTestimonial}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateTestimonial;
