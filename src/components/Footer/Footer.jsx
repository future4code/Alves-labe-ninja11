import React, { Component } from 'react'
import IconName from '../../assets/labeninjas.png'
import IconFacebook from '../../assets/iconFacebook.png'
import IconYoutube from '../../assets/iconYoutube.png'
import IconTwitter from '../../assets/iconTwitter.png'
import IconLinkedIn from '../../assets/iconLinkedIn.png'
import IconInstagram from '../../assets/iconInstagram.png'
import AppStore from '../../assets/AppStore.png'
import GooglePlay from '../../assets/GooglePlay.png'
import WhatsApp from '../../assets/WhatsApp.png'
import FormasDePagamento from '../../assets/FormasDePagamento.png'
import { DivSociais } from './Styled'
import { DivInfo } from './Styled'
import { DivIcons } from './Styled'
import { DivPrincipal } from './Styled'


export default class Footer extends Component {
    render() {
        return (
            <DivPrincipal>
                <DivSociais>
                    <div>
                        <img
                            src={IconName}
                            alt='Nome da empresa'
                        />
                    </div>
                    <div>
                        <img src={FormasDePagamento} alt="Formas de pagamento"/>
                    </div>
                    <DivIcons>
                        <div><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img src={IconInstagram} alt="icone Instagram" /> </a></div>
                        <div><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <img src={IconLinkedIn} alt="icone Linkedin" /> </a></div>
                        <div><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <img src={IconTwitter} alt="icone Twitter" /> </a></div>
                        <div><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <img src={IconYoutube} alt="icone Youtube" /> </a></div>
                        <div><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img src={IconFacebook} alt="icone Facebook" /> </a></div>
                    </DivIcons>
                </DivSociais>
                <DivInfo>
                    <div>
                        <h3>Contato</h3>
                        <h4>atentimentoaocliente@labeninjas.com</h4>
                        <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><img src={WhatsApp} alt="Contato via WhatsApp"/></a>
                    </div>
                    <div>
                        <h4>Ouvidoria</h4>
                        <p>0800 020 2020</p>
                        <p>0800 010 1010</p>
                    </div>
                    <div>
                        <h4>© 2022  LabeNinjas LTDA - Marketplace.  12.345.678/0001-23</h4>
                
                    </div>
                    <div>
                        <h3>Downloads</h3>
                        <div><a href='https://www.apple.com/br/app-store/' target="_blank" rel="noopener noreferrer"><img src={AppStore} alt="Imagem AppStore" /></a></div>
                        <div><a href='https://play.google.com/store/' target="_blank" rel="noopener noreferrer"><img src={GooglePlay} alt="Imagem Google Play Store" /></a></div>
                    </div>
                </DivInfo>
            </DivPrincipal>
        )
    }
}
