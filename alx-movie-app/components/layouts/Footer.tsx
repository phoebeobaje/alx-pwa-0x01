 const Footer: React.FC=()=>{
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.</p>
                <p>Developed by ALX Africa</p>
            </div>
        </footer>
       
    );  
}
export default Footer;