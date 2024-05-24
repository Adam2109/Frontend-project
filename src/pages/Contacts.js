const Contacts = () => {
    return ( <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Sumy, Ukraine</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+380501234567">+380 (50) 123-45-67</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:webdev@protonmail.com">mymail@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>

);
}
 
export default Contacts;