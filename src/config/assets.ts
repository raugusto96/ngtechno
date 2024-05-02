import logo from "../assets/logo/logo-corrida.png";
import listIcon from "../assets/popup-list/icon_podium.svg";
import individualMedal from "../assets/individual-results/icon_medal.svg";
import watch from "../assets/individual-results/icon_tempoliquido.svg";
import ampulhete from "../assets/individual-results/icon_tempobruto.svg";
import runner from "../assets/individual-results/icon_pacemedio.svg";
import team from "../assets/individual-results/icon_equipe.svg";
import whatsapp from "../assets/social-media/Vector.svg";
import instagram from "../assets/social-media/Social Icons.svg";

export default {
  images: {
    logo: {
      src: logo,
      alt: "corrida do rosa logo",
    },
  },
  svgs: {
    list: {
      icon: {
        src: listIcon,
        alt: "podio logo",
      },
    },
    medals: {
      individual: {
        classification: {
          icon: {
            src: individualMedal,
            alt: "icone de medalha",
          },
          times: {
            watch: {
              icon: {
                src: watch,
                alt: "icone de cronometro",
              },
            },
            ampulhete: {
              icon: {
                src: ampulhete,
                alt: "icone de ampulheta",
              },
            },
            runner: {
              icon: {
                src: runner,
                alt: "icone de corredor",
              },
            },
            team: {
              icon: {
                src: team,
                alt: "icone de equipe",
              },
            },
          },
        },
      },
      list: {},
    },
    social: {
      whatsapp: {
        icon: {
          src: whatsapp,
          alt: "icone do whatsapp",
        },
      },
      instagram: {
        icon: {
          src: instagram,
          alt: "icone do instagram",
        },
      },
    },
  },
};
