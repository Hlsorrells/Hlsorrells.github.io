import muddyMtn from '../images/muddyGapLookout.jpg';

const Home = () => {
    return (
        <>
            <main className='container'>
                <section>
                    <div>
                        <h1 id='aboutTitle'>Hi! Welcome to my portfolio!</h1>
                    </div>
                    <div className='row'>
                        {/* Image */}
                        <img src={muddyMtn} alt='Muddy Mountain at Casper Wyoming' id='muddyMtn' />
                        <h5>The above photo of Muddy Mountain (and Banner Mountain in the distance) was taken by me at Crimson Dawn Park near Casper, Wyoming!</h5>
                    </div>
                </section>
                <section>
                    <div>
                        <h1>Make yourself at home by checking out my project page...</h1>
                        <h1>Get to know me by reading my about page...</h1>
                        <h1>Find out how to reach me on my contact page...</h1>
                        <h1>Love to make your acquaintance soon!</h1>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;