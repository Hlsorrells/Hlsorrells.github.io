const ContactInfoTable = () => {
    return (
        <>
            <table >
                <tbody>
                    <tr>
                        <th>Email me here 📧</th>
                        <td><a className='contactLink' href='mailto:hlsorrells.dev@gmail.com'>hlsorrells.dev@gmail.com</a></td>
                    </tr>
                    <tr>
                        <th>Browse through my code repos 💻</th>
                        <td><a className='contactLink' href='https://github.com/Hlsorrells'>GitHub profile</a></td>
                    </tr>
                    <tr>
                        <th>Check out my skills and experience 👩‍💻</th>
                        <td><a className='contactLink' href='https://www.linkedin.com/in/heather-sorrells/'>LinkedIn profile</a></td>
                    </tr>
                    <tr>
                        <th>Read my resume here 👉🏼</th>
                        <td><a className='contactLink' href='https://bit.ly/Hlsorrells_Resume'>My Resume</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ContactInfoTable;