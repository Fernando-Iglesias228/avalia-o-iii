export default function Header( { currentPage } ){
    const createNavItem = (page, text, currentPage) => {
        const isActive = currentPage === page;
        return (
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                <a className="nav-link" href={page}>
                    {text}
                </a>
            </li>
        );
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        MapaDengue
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {createNavItem('Inicio', 'Início', currentPage)}
                            {createNavItem('Mapa', 'Mapa', currentPage)}
                            {createNavItem('Relatorios', 'Relatórios', currentPage)}
                            {createNavItem('Sobre', 'Sobre', currentPage)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}