function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImg} />
                <div class="texto">
                    <div class="nome">{props.userName}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div> 
    );
}


function Sugestoes () {
    
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
        
            <Sugestao
                userImg="assets/img/bad.vibes.memes.svg"
                userName="bad.vibes.memes"
            />

            <Sugestao
                userImg="assets/img/chibirdart.svg"
                userName="chibirdart"
            />

            <Sugestao
                userImg="assets/img/razoesparaacreditar.svg"
                userName="razoesparaacreditar"
            />

            <Sugestao
                userImg="assets/img/adorable_animals.svg"
                userName="adorable_animals"
            />

            <Sugestao
                userImg="assets/img/smallcutecats.svg"
                userName="smallcutecats"
            /> 
        </div>
    );
}


export default Sugestoes;