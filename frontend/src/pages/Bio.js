import React, {Component} from 'react';
import './Bio.css'


class Bio extends Component{

    constructor(props) {
        super(props);
        this.state= {
        };
    }

    componentDidMount() {

    }

    render(){

        return(
            <React.Fragment>
                <div className="container">
                    <div className="topBar">
                        <h1 className="h1Element">
                            EN QUELQUES MOTS
                        </h1>
                        <p className="firstParagraphElement">
                            C’est en 2015 que se réunissent en studio, 3 musiciens passionnés par les explosions
                            sonores et les musiques atypiques. Après une phase d’expérimentation et de recherche,
                            le trio cerne ses intentions de dépasser ses propres limites et d’explorer la furieuse
                            catharsis qui le saisit à chaque répétition : Baron Crâne est né.
                            Animé et inspiré, le trio enregistre le premier album éponyme avec l’aide de Guillaume
                            Roess, ingénieur du son du groupe. Sa publication rencontre un succès d’estime qui se
                            traduit notamment par plus de 110K d‘écoute sur Youtube.
                        </p>
                        <img className="imgElement"
                             src="img/bg-img/a17.jpg"
                        />
                        <p className="paragraphElement">
                            L’année suivante marque un enracinement du style Baron Crâne avec la réalisation d’un
                            premier clip live et l’enregistrement du second album, Electric Shades. Le groupe a
                            trouvé sa mécanique : le guitariste compose les morceaux et un travail d’arrangement
                            pouvant aller jusqu’au dépouillement voire à la déstructuration s’effectuent ensuite
                            pendant les séances de création par le trio. En 2016 Les premiers concerts sont données
                            et l’expérience sonore prend une nouvelle dimension, l’ambition est simple, toucher le
                            public le plus profondément possible sur un registre d’émotions vaste.
                        </p>
                        <p className="paragraphElement">
                            2017 marque un tournant car Baron Crâne se métamorphose. En effet, pour des questions
                            d’ambitions divergentes et de disponibilités un nouveau batteur, puis un nouveau
                            bassiste intègrent le trio. Baron Crâne retravaille alors son expérience live, continue
                            d’effectuer des concerts et travaille sur la préparation de son second clip.
                        </p>
                        <p className="paragraphElement">
                            En 2018, le groupe tourne le clip After the Bombs, une fiction ambitieuse de 7 minutes
                            réalisée par Samir Benchikh. Le trio continue de structurer son organisation et entame
                            le travail de nouvelles compositions encore plus ambitieuses. Il entame un partenariat
                            avec l’école EMC qui lui permettra notamment d’enregistrer dans des studios de qualité
                            (la Fonderie).
                        </p>
                        <p className="paragraphElement">
                            L’année 2019 sera l’année des réalisations, avec l’enregistrement du premier volet de
                            Commotions à la Fonderie et le tournage d’un nouveau clip, Firmin, mélangeant live et
                            images d’archive. Une couleur politique vient s’ajouter sur le travail artistique du
                            trio qui reflète la démarche engagée du collectif.
                            En parallèle, l’équipe s’agrandit avec l’intégration d’une bookeuse et manageuse avec
                            qui est construite une série de tournées rassemblant plus d’une trentaine de dates sur
                            toute l’année, explorant la province, la Belgique et la Hollande. Galvanisé par les
                            retours unanimes d'un public enthousiaste, le groupe reste déterminé à partager sa
                            musique plus largement en France, en Europe voire au-delà.
                            Enfin, à la rentrée, Baron Crâne intègre la Factory, le programme d’accompagnement de
                            la SMAC Le Plan (Ris Orangis). Cette collaboration permet de renforcer la préparation
                            de la sortie de l’album Commotions, prévue en deux volets sur 2020, avec le soutien de
                            professionnels expérimentés.
                        </p>
                        <img className="imgElementBottom1"
                                   src="img/br-img/thumbnails/190927_Baron CrÉne_Portraits_010_WEB_tn.jpg"
                        />
                        <img className="imgElementBottom2"
                             src="img/s/thumbnails/90525481_2568839440052653_857821074862112768_n_tn.jpg"
                        />
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default  Bio;