import styles from "./Perfil.module.scss"
import ImgPerfil from "../../assets/perfil.png"

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>

            <article>

                <img src={ImgPerfil} alt="Foto de perfil" />
    
    
                <div className={styles.cardInfo}>
                    <h2> Anna Caroline Alkmim </h2>
                    <h3> Voluntária Ativa</h3>

                    <p className={styles.paragrafoSobreMim} > Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar. </p>

                    <address>
                        <p> Montes Claros, MG</p>
                        <p> carolsalkmim@gmail.com </p>
                        <p> Membro desde janeiro de 2025</p>
                    </address>
                
                    <ul className={styles.listaInteresses}>
                        <li>Educação</li>
                        <li>Meio Ambiente</li>
                        <li>Assistência Social</li>
                        <li>Design</li>
                    </ul>
                </div>
    
    
            </article>

    </section>
  );
}

export default Perfil;