import React from "react";

const Titulo = (attributes) => {
    const {
        principal = 'Título',
        secondary = 'Subtítulo',
        wrapper = 'h1'
    } = attributes;

    const Wrapper = wrapper;

    return (
        <>
            <Wrapper>{principal}</Wrapper>
            <h2>{secondary}</h2>
        </>
    )

}
export default Titulo;
