import ContactInfoTable from '../components/ContactInfoTable';
import profilePic from '../images/heatherSorrellsProfilePic.PNG';

const Contact = () => {
    return (
        <>
            <main className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Thanks so much for visiting my portfolio!</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <img className='round mx-auto d-block' src={profilePic} alt='Heather Sorrells' />
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3>Heather Sorrells</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='d-flex col-sm-8'>
                        <ContactInfoTable />
                    </div>
                    <div className='col-2'></div>
                </div>
            </main>
        </>
    )
}

export default Contact;