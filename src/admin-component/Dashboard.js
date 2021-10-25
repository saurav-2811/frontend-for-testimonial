// import { BASE_URL } from "../env";
import {useState} from "react"
import {Link} from "react-router-dom"
import TestimonialCard from "./TestimonialCard";
const Dashboard = () => {
    const [query,setQuery]=useState("")
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      
          
        <div className=" container">
              <select class="form-select my-2  " value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }} >
                <option value="">All Testimonial</option>
                <option value="?Active=true">Active Testimonial</option>
                <option value="?Active=false">Not Active Testimonial</option>
              </select>
         
                <Link className=" text-light  btn-primary btn-lg btn rounded mx-1 " to="/addTestimonial">
                 + Testimonial
                </Link>
           </div>
        
      </nav>
      <TestimonialCard query={query} />
    </>
  );
};
export default Dashboard;
