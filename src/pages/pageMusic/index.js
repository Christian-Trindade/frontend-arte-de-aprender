import { IonPage } from "@ionic/react";
import * as React from "react";


const PageMusic = () => {
  return (
    <IonPage>
    <div>
        <div style={{
                        background: "#191A23",
                    }}
        >

            <div style={{
                            display:"flex",
                            padding:"2rem",
                        }}
            >
                <div>
                    <img style={{
                                background: "#E54D69",
                                boxShadow: "3px 4px 17px rgba(235, 122, 142, 0.7)",
                                borderRadius: "6px",
                                display:"block",
                                margin:"auto",
                            }} 
                        src="https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/6/ligacoes-quimicas.jpg" 
                        
                    />
                </div>

                <div style={{
                                marginLeft:"2rem",
                                fontFamily: "Poppins, Verdana",
                                color: "#F5F5F5",
                            }}
                >
                            <p style={{fontSize:"1.5rem", marginBottom: "0px"}}>Meu resumo bolado</p>
                            <p style={{fontSize:"1.1rem", marginTop:"0.1rem", paddingTop:"0px", color:"#E7E7E8"}}>Ligação Ionica (Quimica)</p>
                            <p style={{fontSize:"1.2rem",}}>Autor: <a href="#">Yan Marques</a></p>

                            
                            <p>
                                <img style={{
                                            width:"2.5rem",
                                            marginTop:"1rem",
                                            fill:"red",
                                            }}
                                    src="/assets/icon/like-red.svg" 
                                />
                                <span>321</span>
                            </p>
                            
                </div>

            </div>
        </div>

        <div style={{
                        marginTop:"1px",
                        padding:"1rem",
                    }}
        >
            <p style={{fontSize:"2rem", color:"#030517"}}>
                <span style={{background:"#DE2345",width:"4px", height:"6px"}}>&nbsp;</span>
            &nbsp;Resumo
            </p>
            
            <div style={{
                        overflow:"scroll",
                        height: "300px",
                    }}
            >
                <p style={{
                            textAlign:"justify",
                            fontSize:"1.5rem",
                            color:"#444458",
                            fontFamliy:"Poppins, Verdana",
                        }}
                >
                    A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16 de novembro de 1904 na cidade do Rio de Janeiro, então capital do Brasil. Seu pretexto imediato foi uma lei que determinava a obrigatoriedade da vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lideradas pelo médico Oswaldo Cruz.
                    No início do século XX, o planejamento urbano da cidade do Rio de Janeiro, herdado do período colonial e do Império, não condizia mais com a condição de capital e centro das atividades econômicas. Além disso, a cidade sofria com sérios problemas de saúde pública. 
                    A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16 de novembro de 1904 na cidade do Rio de Janeiro, então capital do Brasil. Seu pretexto imediato foi uma lei que determinava a obrigatoriedade da vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lideradas pelo médico Oswaldo Cruz.
                    No início do século XX, o planejamento urbano da cidade do Rio de Janeiro, herdado do período colonial e do Império, não condizia mais com a condição de capital e centro das atividades econômicas. Além disso, a cidade sofria com sérios problemas de saúde pública. 
                </p>
            </div>
        </div>
    </div>
    {/* <div>
        <img style={{
                        display:"block",
                        margin:"auto",
                        width:"4.5rem",
                        marginTop:"2rem",
                    }}
             src="/assets/icon/play.png" 
        />
    </div> */}
       {/* <div style={{
                    marginTop: "4rem",
                   }}
       >
           <img style={{
                        background: "#E54D69",
                        boxShadow: "3px 4px 17px rgba(235, 122, 142, 0.7)",
                        borderRadius: "6px",
                        display:"block",
                        margin:"auto",
                       }} 
                src="https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/6/ligacoes-quimicas.jpg" 
                
            />

            
          
            <img style={{
                        display:"block",
                        margin:"auto",
                        width:"4.5rem",
                        marginTop:"2rem",
                        }}
                 src="/assets/icon/play.png" 
            />

            <p style={{
                        textAlign:"center",
                        fontSize:"1.8rem",
                        color: "#444458",
                        padding:"1rem",
                        marginTop:"1.5rem",
                        marginBottom:"0px",
                        fontFamily: "Poppins, Verdana",
                      }}
            >
                Resumo
            </p>
            
           
            <img style={{
                        display:"block",
                        margin:"auto",
                        marginTop:"0.1rem",
                        paddingBottom:"1rem",
                        }}
                 src="/assets/icon/barra.png" 
            />
           
       </div>
        
        <div style={{
                        padding:"2.3rem",
                        paddingTop:"0.5rem",
                        overflow:"scroll",
                    }}
        >
           

            <p style={{
                        textAlign:"justify",
                        fontSize:"2rem",
                        color:"#444458",
                        fontFamliy:"Poppins, Verdana",
                     }}
            >
            A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16 de novembro de 1904 na cidade do Rio de Janeiro, então capital do Brasil. Seu pretexto imediato foi uma lei que determinava a obrigatoriedade da vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lideradas pelo médico Oswaldo Cruz.

No início do século XX, o planejamento urbano da cidade do Rio de Janeiro, herdado do período colonial e do Império, não condizia mais com a condição de capital e centro das atividades econômicas. Além disso, a cidade sofria com sérios problemas de saúde pública. 
            </p>

        </div> */}

    </IonPage>
  );
};

export default PageMusic;
