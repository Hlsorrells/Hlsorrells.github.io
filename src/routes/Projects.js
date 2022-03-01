import megabitesPic from '../images/megabites.gif';
import schoolSpotPic from '../images/SchoolSpot.gif';
import drinkinBadPic from '../images/drinkin-bad.gif';
import weatherDashboardPic from '../images/weatherDashboard.gif';
import codeQuizPic from '../images/CodeQuiz.gif';
import pwGeneratorPic from '../images/passwordGenerator.gif';

const Projects = () => {
    return (
        <>
            <main className='container'>
                <section>
                    {/* First Row (Header) */}
                    <div className='row'>
                        <h1>My Projects</h1>
                    </div>
                </section>
                {/* Grid Template for adding additional projects */}
                {/* <section>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-4'>
                                Column
                            </div>
                            <div class='col-4'>
                                Column
                            </div>
                            <div class='col-4'>
                                Column
                            </div>
                        </div>
                    </div>
                </section> */}
                <section>
                    {/* Second Row (Bootcamp Header) */}
                    <div className='row'>
                        <h3>These are my projects from the web dev Bootcamp</h3>
                    </div>
                </section>
                <section>
                    <div class='container'>
                        <div class='row'>
                            {/* Megabites Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://megabytes.herokuapp.com/'>
                                        <img className='gif' src={megabitesPic} alt='Megabites Project' />
                                    </a>
                                    <figcaption>
                                        <a href='https://megabytes.herokuapp.com/'>Megabites Deployed Link</a>
                                    </figcaption>
                                    <figcaption>
                                        <a href='https://github.com/Hlsorrells/megabites'>Megabites GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {/* School Spot Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://desolate-lowlands-55237.herokuapp.com/'>
                                        <img className='gif' src={schoolSpotPic} alt='School Spot Project' />
                                    </a>
                                    <figcaption>
                                        <a href='https://desolate-lowlands-55237.herokuapp.com/'>School Spot Deployed Link</a>
                                    </figcaption>
                                    <figcaption>
                                        <a href='https://github.com/Hlsorrells/SchoolSpot'>School Spot GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class='row'>
                            {/* Drinking Bad Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://hlsorrells.github.io/Drinking-Bad/'>
                                        <img className='gif' src={drinkinBadPic} alt='Drinking Bad Project' />
                                    </a>
                                    <figcaption><a href='https://hlsorrells.github.io/Drinking-Bad/'>Drinkin' Bad Deployed Link</a>
                                    </figcaption>
                                    <figcaption><a href='https://github.com/Hlsorrells/Drinking-Bad'>Drinkin' Bad GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {/* Weather Dashboard Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://hlsorrells.github.io/weather-dashboard/'>
                                        <img className='gif' src={weatherDashboardPic} alt='Weather Dashboard Project' />
                                    </a>
                                    <figcaption>
                                        <a href='https://hlsorrells.github.io/weather-dashboard/'>Weather Dashboard Deployed Link</a>
                                    </figcaption>
                                    <figcaption>
                                        <a href='https://github.com/Hlsorrells/weather-dashboard'>Weather Dashboard GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class='row'>
                            {/* Code Quiz Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://hlsorrells.github.io/Code-Quiz/'>
                                        <img className='gif' src={codeQuizPic} alt='Code Quiz Project' />
                                    </a>
                                    <figcaption>
                                        <a href='https://hlsorrells.github.io/Code-Quiz/'>Code Quiz Deployed Link</a>
                                    </figcaption>
                                    <figcaption>
                                        <a href='https://github.com/Hlsorrells/Code-Quiz'>Code Quiz GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {/* Password Generator Project */}
                            <div class='col-6'>
                                <figure>
                                    <a href='https://hlsorrells.github.io/PasswordGenerator/'>
                                        <img className='gif' src={pwGeneratorPic} alt='Password Generator Project' />
                                    </a>
                                    <figcaption>
                                        <a href='https://hlsorrells.github.io/PasswordGenerator/'>Password Generator Deployed Link</a>
                                    </figcaption>
                                    <figcaption>
                                        <a href='https://github.com/Hlsorrells/PasswordGenerator'>Password Generator GitHub Repo</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Projects;