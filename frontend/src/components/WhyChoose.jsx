import "./WhyChoose.css";

function WhyChoose() {

const items=[
"Verified Farmers",
"Quality Products",
"Fair Prices",
"Secure Payments",
"Fast Delivery",
"24×7 Support"
];

return(

<section className="why">

<h1>Why Choose AgroCircle?</h1>

<div className="why-grid">

{items.map((item,index)=>(

<div className="why-card" key={index}>

<h2>✅</h2>

<h3>{item}</h3>

</div>

))}

</div>

</section>

);

}

export default WhyChoose;