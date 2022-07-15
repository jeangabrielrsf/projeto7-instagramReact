
function Post (props) {
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
                <img src={props.postContent} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
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
                        {props.likeText}
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
                likeText="Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"
                />
            <Post 
                userImg="assets/img/barked.svg"
                user="barked"
                postContent="assets/img/dog.svg"
                likeImg="assets/img/adorable_animals.svg"
                likeText="Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"
            />
        </div>
 

    );
}


export default Posts;