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
  const { logoSrc, getCertifiedByRunner, certifiedUrl, runnerFormatted } =
    useRunnersContext();
  const regex = /\d/;

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
            <h3>{runnerFormatted.nome}</h3>
            <h4>
              {
                runnerTransition.sex[
                  runnerFormatted.sexo.split(regex)[0].toLowerCase()
                ]
              }{" "}
              | {runner.numeroCorredor}
              {runnerFormatted.faixaEtaria
                ? ` | ${runnerFormatted.faixaEtaria}`
                : " | "}
            </h4>
          </RunnerDescContainer>
        </HeaderContainer>
        <ClassificationContainer>
          <h2>
            Classificações |{" "}
            {runnerFormatted.percurso ? runnerFormatted.percurso : ""}
          </h2>
          <ClassificationCardContainer>
            {runnerFormatted.classSexo && (
              <IndividualClassificationCard
                category='Sexo'
                classification={Number(runnerFormatted.classSexo) || 0}
                isPersonalBest={false}
                backgroundColor='#F1E1F7'
                paragraphColor='#BB6BD9'
              />
            )}
            <IndividualClassificationCard
              category='Geral'
              classification={Number(runnerFormatted.classificacao) || 0}
              isPersonalBest={false}
              backgroundColor='#CDFBF8'
              paragraphColor='#5ABEBD'
            />
            <IndividualClassificationCard
              category='CatFE'
              classification={Number(runnerFormatted.classFaixaEtaria) || 0}
              isPersonalBest={
                Number(runnerFormatted.classFaixaEtaria) > 0 ? true : false
              }
              backgroundColor='#FFEDD8'
              paragraphColor='#D9A06B'
            />
          </ClassificationCardContainer>
        </ClassificationContainer>
        <ClassificationTimesContainer>
          <IndividualTimeCard
            time={runnerFormatted.tempoLiquido || "0"}
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
            time={runnerFormatted.tempoChegada || "0"}
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
            time={runnerFormatted.pace || "0"}
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
            time={runnerFormatted.equipe ? runnerFormatted.equipe : "-"}
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
                getCertifiedByRunner(Number(runner.numeroCorredor));
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
