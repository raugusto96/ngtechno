import logo from "../assets/logo/logo-corrida.png";
import listIcon from "../assets/popup-list/icon_podium.svg";
import individualMedal from "../assets/individual-results/icon_medal.svg";
import watch from "../assets/individual-results/icon_tempoliquido.svg";
import ampulhete from "../assets/individual-results/icon_tempobruto.svg";
import runner from "../assets/individual-results/icon_pacemedio.svg";
import team from "../assets/individual-results/icon_equipe.svg";
import whatsapp from "../assets/social-media/Vector.svg";
import instagram from "../assets/social-media/Social Icons.svg";
import medal1 from "../assets/medals/medal_1.svg";
import medal2 from "../assets/medals/medal_2.svg";
import medal3 from "../assets/medals/medal_3.svg";
import medal4 from "../assets/medals/medal_4.svg";
import medal5 from "../assets/medals/medal_5.svg";

export default {
  images: {
    logo: {
      src: logo,
      alt: "logo da corrida",
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
          positions: {
            first: {
              icon: {
                src: medal1,
                alt: "icone de medalha de primeiro lugar",
              },
            },
            second: {
              icon: {
                src: medal2,
                alt: "icone de medalha de segundo lugar",
              },
            },
            third: {
              icon: {
                src: medal3,
                alt: "icone de medalha de terceiro lugar",
              },
            },
            fourth: {
              icon: {
                src: medal4,
                alt: "icone de medalha de quarto lugar",
              },
            },
            fifth: {
              icon: {
                src: medal5,
                alt: "icone de medalha de quinto lugar",
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
