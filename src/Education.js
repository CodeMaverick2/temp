import './Education.css';

function Education(){
    return(
        <div className="education" id='education'>
            <div class="edc-info">
                <div class="info">
                    <h1>Education</h1>
                    <div className='education-details'>
                        <div>
                            <div class="card">
                                <div class="card-imort">
                                    <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2012-2021</h6>
                                    <h4>Primary Education</h4>
                                    <h5>Sinhgad Public School</h5>
                                </div>
                                    
                            </div>
                            <div class="card">
                                <div class="card-imort">
                                        <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2021-2023</h6>
                                    <h4>Higher Secondary Education</h4>
                                    <h5>Allen</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-imort">
                                        <div class="card-img">
                                        <img src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"></img>
                                    </div>
                                </div>
                                <div class="card-inf">
                                    <h6>2023-Present</h6>
                                    <h4>Bachelor of Science</h4>
                                    <h5>Scaler School of Technology</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edc-image">
                <img class="image" src="https://dev-portfolio-template.netlify.app/static/media/eduOrange.c61dcfc3.svg"></img>

            </div>
        </div>
    )
}
export default Education;