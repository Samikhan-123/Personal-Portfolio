import React from 'react'

const PricingCard = () => {
    return (
        <>
            <section id="services-section" className="py-5 text-dark ">
                <div className="container">
                    <h2 className="text-center mb-5 text-dark fw-bold">Services</h2>
                    <p className="text-center text-dark">
                        As a talented MERN stack developer, I provide a complete range of services to meet your web development requirements. I provide modern solutions for your business by using  MongoDB, Express.js, React.js, and Node.js technology.
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-sm-10 row-cols-xs-12 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title"><span>Full-stack </span>Web Development</h2>
                                    <p className="card-text text-dark">
                                        Develop end-to-end web applications using the MERN stack, ensuring seamless integration and optimal performance.
                                        From database design with MongoDB to front-end development with React.js, I provide a holistic approach to web development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title"><span>RESTful </span>APIs</h2>
                                    <p className="card-text text-dark">
                                        Design and implement RESTful APIs using Node.js and Express.js, enabling smooth communication between your front-end and back-end.
                                        I focus on creating efficient and scalable APIs to support various functionalities within your web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title"><span>Responsive </span>Front-end</h2>
                                    <p className="card-text text-dark">
                                        Develop responsive and user-friendly front-end interfaces using React.js. I prioritize creating engaging and interactive user experiences
                                        that enhance user satisfaction and contribute to the success of your web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title"><span>Database </span>Optimization</h2>
                                    <p className="card-text text-dark">
                                        Optimize database performance and design with MongoDB, ensuring efficient storage and retrieval of data.
                                        I focus on creating well-structured databases that align with your application's requirements and future scalability needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingCard
