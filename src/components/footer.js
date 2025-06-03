export default function Footer(){
    return (<footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>MapaDengue</h5>
                    <div className="social-icons">
                        <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-tripadvisor"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>Horário de Contato</h5>
                    <ul className="list-unstyled">
                        <li>Todos os dias: 7h - 11h</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contato</h5>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-map-marker-alt me-2"></i> Rua Um, 123 - Centro</li>
                        <li><i className="fas fa-phone me-2"></i> (67) 1234-5678</li>
                        <li><i className="fas fa-envelope me-2"></i> contato@mapadengue.com</li>
                    </ul>
                </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="text-center">
                <p className="mb-0">&copy; 2025 MapaDengue. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    );
}