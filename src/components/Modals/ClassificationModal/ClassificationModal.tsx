import Button from "../../../components/Button";
import IndividualClassificationCard from "../../../components/Cards/IndividualClassificationCard/IndividualClassificationCard";
import IndividualTimeCard from "../../../components/Cards/IndividualTimeCard/IndividualTimeCard";
import SocialMediaIcon from "../../../components/Icons/SocialMediaIcon/SocialMediaIcon";
import { runnerTransition } from "../../../config/transition";
import { ClassificationModalProps } from "./protocol";
import assets from "../../../config/assets";
import LogoImage from "../../../components/Images/Logo/LogoImage";
import {
  ButtonsContainer,
  ClassificationCardContainer,
  ClassificationContainer,
  ClassificationTimesContainer,
  Container,
  HeaderContainer,
  ModalOverlay,
  RunnerDescContainer,
  SocialMediaContainer,
} from "./styles";
import useRunnersContext from "hooks/useRunnersContext";
import { useCallback } from "react";

const ClassificationModal: React.FC<ClassificationModalProps> = ({
  runner,
  handleClose,
}) => {
  const { logoSrc, getCertifiedByRunner, certifiedUrl } = useRunnersContext();

  const handleOpenCertified = useCallback(() => {
    window.open(certifiedUrl, "_blank");

    // Liberar a URL do objeto após o download
    window.URL.revokeObjectURL(certifiedUrl);
  }, [certifiedUrl]);

  return (
    <ModalOverlay>
      <Container>
        <HeaderContainer>
          <LogoImage src={logoSrc} alt={assets.images.logo.alt} />
          <RunnerDescContainer>
            <h3>{runner.nome}</h3>
            <h4>
              {runnerTransition.sex[runner?.sexo.toLowerCase()]} |{" "}
              {runner.numero}
            </h4>
          </RunnerDescContainer>
        </HeaderContainer>
        <ClassificationContainer>
          <h2>Classifacações</h2>
          <ClassificationCardContainer>
            <IndividualClassificationCard
              category='Sexo'
              classification={Number(runner.classSexo)}
              isPersonalBest={false}
              backgroundColor='#F1E1F7'
              paragraphColor='#BB6BD9'
            />
            <IndividualClassificationCard
              category='Geral'
              classification={Number(runner.classGeral)}
              isPersonalBest={false}
              backgroundColor='#CDFBF8'
              paragraphColor='#5ABEBD'
            />
            <IndividualClassificationCard
              category='CatFE'
              classification={Number(runner.classCatFE)}
              isPersonalBest={Number(runner.classCatFE) > 0 ? true : false}
              backgroundColor='#FFEDD8'
              paragraphColor='#D9A06B'
            />
          </ClassificationCardContainer>
        </ClassificationContainer>
        <ClassificationTimesContainer>
          <IndividualTimeCard
            time={runner.tempoLiquido}
            label='Tempo Líquido'
            icon={
              <LogoImage
                src={
                  assets.svgs.medals.individual.classification.times.watch.icon
                    .src
                }
                alt={
                  assets.svgs.medals.individual.classification.times.watch.icon
                    .alt
                }
              />
            }
          />
          <IndividualTimeCard
            time={runner.tempoBruto}
            label='Tempo Bruto'
            icon={
              <LogoImage
                src={
                  assets.svgs.medals.individual.classification.times.ampulhete
                    .icon.src
                }
                alt={
                  assets.svgs.medals.individual.classification.times.ampulhete
                    .icon.alt
                }
              />
            }
          />
          <IndividualTimeCard
            time={runner.paceMedio}
            label='Pace Medio'
            icon={
              <LogoImage
                src={
                  assets.svgs.medals.individual.classification.times.runner.icon
                    .src
                }
                alt={
                  assets.svgs.medals.individual.classification.times.runner.icon
                    .alt
                }
              />
            }
          />
          <IndividualTimeCard
            time={runner.equipe}
            label='Equipe'
            icon={
              <LogoImage
                src={
                  assets.svgs.medals.individual.classification.times.team.icon
                    .src
                }
                alt={
                  assets.svgs.medals.individual.classification.times.team.icon
                    .alt
                }
              />
            }
          />
        </ClassificationTimesContainer>
        <ButtonsContainer>
          {runner.certificado && (
            <Button
              text='Baixar certificado'
              handleClick={() => {
                getCertifiedByRunner(Number(runner.numero));
                handleOpenCertified();
              }}
            />
          )}

          <Button
            text='Fechar'
            handleClick={() => handleClose("classificationModal", false)}
          />
        </ButtonsContainer>
        <SocialMediaContainer>
          <SocialMediaIcon
            icon={
              <LogoImage
                src={assets.svgs.social.whatsapp.icon.src}
                alt={assets.svgs.social.whatsapp.icon.alt}
              />
            }
            handleClick={() => []}
          />
          <SocialMediaIcon
            icon={
              <LogoImage
                src={assets.svgs.social.instagram.icon.src}
                alt={assets.svgs.social.instagram.icon.alt}
              />
            }
            handleClick={() => []}
          />
        </SocialMediaContainer>
      </Container>
    </ModalOverlay>
  );
};

export default ClassificationModal;
