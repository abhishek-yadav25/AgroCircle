import "./Testimonials.css";

function Testimonials(){

const reviews=[

{
name:"Rahul Patil",
place:"Pune",
text:"AgroCircle helped me sell my crops directly to buyers."
},

{
name:"Suresh Yadav",
place:"Nashik",
text:"Easy registration and excellent support."
},

{
name:"Anita Sharma",
place:"Nagpur",
text:"Best agriculture platform for farmers."
}

];

return(

<section className="testimonials">

<h1>Testimonials</h1>

<div className="review-grid">

{reviews.map((review,index)=>(

<div className="review-card" key={index}>

<h2>⭐⭐⭐⭐⭐</h2>

<p>"{review.text}"</p>

<h3>{review.name}</h3>

<span>{review.place}</span>

</div>

))}

</div>

</section>

);

}

export default Testimonials;