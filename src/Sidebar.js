import Sugestoes from "./Sugestoes";
import SidebarUserSuggestion from "./SidebarUserSugestion";

function Sidebar() {
    return (
        <div class="sidebar">
           <SidebarUserSuggestion 
                userImg="assets/img/catanacomics.svg"
                user="catanacomics"
                description="Catana"
            />
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>
    )
}


export default Sidebar;