import style from '../asset/css/page.module.css'
import service from '../asset/img/services.png'
import LineIcon from "react-lineicons"
const Services=()=>{
    return(
<section id="service" className={`${style.servicesArea}`}>
<div className="container">
<div className="row">
<div className="col-lg-6">
<div className={`${style.sectionTitle}  pb-10`}>
<h4 className={`${style.title}`}>Crafted For</h4>
<p className={`${style.text}`}>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
</div> 
</div>
</div> 
<div className="row">
<div className="col-lg-8">
<div className="row">
<div className="col-md-6 my-4">
<div className={`${style.servicesContent}  mt-40 d-sm-flex`}>
<div className={`${style.servicesIcon}`}>
<LineIcon name="bolt" />
</div>
<div className={`${style.servicesContent} media-body`}>
<h4 className={`${style.servicesTitle}`}>Startup</h4>
<p className={`${style.text}`}>Short description for the ones<br/> who look for something new.</p>
</div>
</div> 
</div>
<div className="col-md-6 my-4">
<div className={`${style.servicesContent}  mt-40 d-sm-flex`}>
<div className={`${style.servicesIcon}`}>
<LineIcon name="bar-chart" />
</div>
<div className={`${style.servicesContent} media-body`}>
<h4 className={`${style.servicesTitle}`}>SaaS Business</h4>
<p className={`${style.text}`}>Short description for the ones<br/> who look for something new.</p>
</div>
</div> 
</div>
<div className="col-md-6 my-4">
<div className={`${style.servicesContent}  mt-40 d-sm-flex`}>
<div className={`${style.servicesIcon}`}>
<LineIcon name="brush" />
</div>
<div className={`${style.servicesContent} media-body`}>
<h4 className={`${style.servicesTitle}`}>Agency</h4>
<p className={`${style.text}`}>Short description for the ones<br/> who look for something new.</p>
</div>
</div> 
</div>
<div className="col-md-6 my-4">
<div className={`${style.servicesContent}  mt-40 d-sm-flex`}>
<div className={`${style.servicesIcon}`}>
<LineIcon name="bulb" />
</div>
<div className={`${style.servicesContent} media-body`}>
<h4 className={`${style.servicesTitle}`}>App Landing</h4>
<p className={`${style.text}`}>Short description for the ones<br/> who look for something new.</p>
</div>
</div> 
</div>
</div> 
</div> 
</div> 
</div> 
<div className={`${style.servicesImage} d-lg-flex align-items-center`}>
<div className={`${style.image}`}>
<img src={service} alt="Services"/>
</div>
</div> 
</section>

    )
}
export default Services