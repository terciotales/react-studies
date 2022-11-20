import Titulo from "../../components/Titulo";

export default () => {
    const attributes = {
        principal: "Página de cadastro", secondary: "Incluir, alterar e excluir coisas", wrapper: "i"
    }
    return (
        <>
            <div>
                <Titulo {...attributes}/>
            </div>
        </>
    )
}