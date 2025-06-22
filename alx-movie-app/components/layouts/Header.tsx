import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>ALX Movie App</h1>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/movies">Movies</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}   
export default Header;