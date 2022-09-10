export default function () {
    return (
        <div>
            {gerar_lista()}
        </div>
    )
}

function gerar_lista(max = 10) {
    let lista = [];

    for (let i = 1; i <= max; i++) {
        lista.push(<span>{i}</span>);
    }

    return lista;
}