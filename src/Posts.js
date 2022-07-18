import React from "react";


function Post (props) {

    const [formaBotao, setFormaBotao] = React.useState("heart-outline");
    const [corBotao, setCorBotao] = React.useState("preto");
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postContent} onDoubleClick={() => {
                    if (formaBotao != "heart") {
                        setFormaBotao("heart");
                        setCorBotao("vermelho");
                    }
                }} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={formaBotao} class={corBotao}
                            onClick={() => {
                                if (formaBotao != "heart"){
                                    setFormaBotao("heart");
                                    setCorBotao("vermelho");
                                } else {
                                    setFormaBotao("heart-outline");
                                    setCorBotao("preto");
                                }
                                
                            }}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImg} />
                    <div class="texto">
                        Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Posts () {
    return (
        <div class="posts">
            <Post 
                userImg="assets/img/meowed.svg"
                user="meowed"
                postContent="assets/img/gato-telefone.svg"
                likeImg="assets/img/respondeai.svg"
                likeUser="respondeai"
                likeNumber="101.523"
               
                />
            <Post 
                userImg="assets/img/barked.svg"
                user="barked"
                postContent="assets/img/dog.svg"
                likeImg="assets/img/adorable_animals.svg"
                likeUser="adorable_animals"
                likeNumber="99.159"
            />
        </div>
 

    );
}


export default Posts;