export default function FocosBairro({ allMarkers = [] }) {
  return (
    <div>
      <h1>Focos do Bairro</h1>
      <ul>
        {allMarkers.map((foco) => {
          const hasImage = foco.imagem && foco.imagem !== 'null';

          return (
            <li key={foco.id}>
              <p>
                <b>{foco.nome || 'Não informado'}:</b><br />
                {foco.endereco}<br />
                Tipo: {foco.tipo}<br />
                {foco.data_registro
                  ? `Registrado em: ${new Date(foco.data_registro).toLocaleDateString()}`
                  : ''}
              </p>
              {hasImage && (
                <a
                  href={foco.imagem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm btn-primary view-btn flex-grow-1">
                    Ver Foto
                  </button>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
