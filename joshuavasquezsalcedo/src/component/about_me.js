function AboutMe() {
    return (
        <div className="row align-items-center flex-row-reverse">
            <div className="col-6">
                <div className="about-text go-to">
                    <h3 className="dark-color">Hi I'm Joshua!</h3>
                    <h6 className="theme-color lead">An aspiring <b>FullStack Developer</b></h6>
                    <p>I am a aspiring<mark><b>web developer.</b></mark> skilled in both <b>front-end and back-end development.</b>  Solving complex coding challenges with elegant solutions is a source of pride for me. My ultimate career goal is to become a full-stack developer and I am continuously improving my skills and experience in this field.</p>
                    <p>Beyond coding, I enjoy pursuing hobbies that challenge my mind, such as playing chess and poker. Additionally, sports are a great way to stay mentally and physically sharp, whether I'm cheering on my favorite teams or hitting the gym myself.</p>
                    <p>Thank you for taking the time to learn a bit about me! I am excited to showcase my web development projects on my portfolio website, and I hope you will find them both informative and inspiring.</p>
                    <div className="card card-body bg-light rounded-0">
                        <div className="row about-list">
                            <div className="col-md-6">
                                <div className="media">
                                    <label>Full Name</label>
                                    <p>Joshua Vasquez Salcedo</p>
                                </div>
                                <div className="media">
                                    <label>Birthday</label>
                                    <p>February 22, 1995</p>
                                </div>
                                <div className="media">
                                    <label>Age</label>
                                    <p>28 Yrs old</p>
                                </div>
                                <div className="media">
                                    <label>Residence</label>
                                    <p>Philippines</p>
                                </div>
                                <div className="media">
                                    <label>Address</label>
                                    <p>Block 8 lot 16 scions Elite Kauswagan</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media">
                                    <label>Personal email</label>
                                    <p>joshuagarrysalcedo@gmail.com</p>
                                </div>
                                <div className="media">
                                    <label>School email</label>
                                    <p>2008361637@my.xu.edu.ph</p>
                                </div>
                                <div className="media">
                                    <label>Facebook</label>
                                    <a href="https://www.facebook.com/joshuavasquezsalcedo">Facebook</a>
                                </div>
                                <div className="media">
                                    <label>Year and Section</label>
                                    <p>3rd CCB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="about-avatar">
                    <img src="/Me.jpg" title="Joshua Salcedo Image" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe