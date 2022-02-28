import profilePic from '../images/heatherSorrellsProfilePic.PNG';
import mtnRange from '../images/tetonMtnRange.JPG';
import laptop from '../images/clement-helardot-95YRwf6CNw8-unsplash.jpg'
/* Photo by <a href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Hélardot</a> on <a href="https://unsplash.com/s/photos/laptop-code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */

const About = () => {
    return (
        <>
            <main className='container'>

                {/* First Row */}
                <section className='row'>
                    {/* First (and only) Column */}
                    <div className='col-sm'>
                    {/* Page Header */}
                    <h1 id='aboutTitle'>Let me share a bit about me...</h1>
                    </div>
                </section>

                {/* Second Row */}
                <section className='row'>
                    {/* First Column */}
                    <div className='col-md-3'>
                        {/* Image */}
                        <img src={profilePic} alt='Heather Sorrells' id='about-tiles' />
                    </div>
                    {/* Second Column */}
                    <div className='sectionContent col-md-9'>
                        {/* Section Header */}
                        <h2>Who I am</h2>
                        {/* Section Article */}
                        <p>I am a wife and aunt that loves spending time with my family! My hobbies include hiking through the woods, camping under the stars, reading a good book, and playing video games with my nephew. While I am definitely an introvert, I do enjoy worshipping in my church, spending time with friends, working in my community, attending performances of the Wyoming symphony, and exploring small town fairs. My family is preparing to move back home to Wyoming where the snow makes the air clean and crisp, the wind never stops blowing, and the sunsets are spectacular!</p>
                    </div>
                </section>

                {/* Third Row */}
                <section className='row'>
                    {/* First Column */}
                    <div className='col-md-3'>
                        {/* Image */}
                        <img src={mtnRange} alt='Teton Mountain Range' id='about-tiles' />
                    </div>
                    {/* Second Column */}
                    <div className='sectionContent col-md-9'>
                        {/* Section Header */}
                        <h2>My Background</h2>
                        {/* Section Article */}
                        <p>With years of experience in bookkeeping and office administration, I have worked in a wide variety of industries from manufacturing and service to banking and government. These positions provided me with an opportunity to hone my critical thinking and organizational skills in addition to developing my soft skills in communication and leadership.</p>
                        <p>My attention to detail, perseverance, adaptability, and good-natured attitude make me a valuable teammate that is willing to lend a helping hand whenever it is needed. I have always been one to strive for excellence in my work and for mastery of my craft. Each new position is a stepping stone, as I continuously improve and seek to learn new things.</p>
                    </div>
                </section>

                {/* Fourth Row */}
                <section className='row'>
                    {/* First Column */}
                    <div className='col-md-3'>
                        {/* Image */}
                        <img src={laptop} alt='open laptop on table' id='about-tiles' />
                    </div>
                    <div className='sectionContent col-md-9'>
                        {/* Section Header */}
                        <h2>My Experience a.k.a. "Hands On Keyboard!"</h2>
                        {/* Section Article */}
                        <p>In 2014, I returned to college and obtained my Bachelor's degree in Management of Information Systems and Business Analytics. During my college courses, I explored SQL, SAS, R, and Python which piqued my interest in the larger world of computer programming. This journey expanded my knowledge of information systems, taught me new skills in data analytics, and revealed my love for coding.</p>
                        <p>At the completion of my degree, I attended a web development bootcamp where I learned how to build full-stack web applications using HTML5, CSS3, JavaScript, Node, React, Mongo, and MySQL. At the completion of the bootcamp, I was hired as a teaching assistant, tutor and grader for that same program. This challenged me to greater depths of understanding as I had to answer questions from students, troubleshoot their code, and teach them the concepts and techniques that I had learned.</p>
                        <p>As I looked for full-time employment, I was given the opportunity to explore data engineering where I learned more about Snowflake, Airflow, dbt, Fivetran, and even became an AWS Certified Cloud Practitioner. I have gained confidence commiting and reviewing code in GitHub, working as part of a large team, and quickly pivoting as new priorities are identified.</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About;