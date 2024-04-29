import Button from "components/Button";
import IndividualClassificationCard from "components/Cards/IndividualClassificationCard/IndividualClassificationCard";
import IndividualTimeCard from "components/Cards/IndividualTimeCard/IndividualTimeCard";
import SocialMediaIcon from "components/Icons/SocialMediaIcon/SocialMediaIcon";
import { runnerTransition } from "config/transition";
import { IRunner } from "context/provider/protocols";
import { RunnersContext } from "context/runnerContext";
import { useContext, useEffect, useState } from "react";

const Classification: React.FC = () => {
  const [runner, setRunner] = useState<IRunner>({} as IRunner);

  const context = useContext(RunnersContext);

  useEffect(() => {
    if (context) {
      setRunner(context.runner);
    }
  }, [context]);

  return (
    <>
      <section>
        <h3>{runner.name}</h3>
        <h4>
          {context && runnerTransition.sex[runner.sex.toLowerCase()]} |{" "}
          {runner.id}
        </h4>
      </section>
      <section>
        <h2>Classifacações</h2>
        <IndividualClassificationCard
          category='Sexo'
          classification={runner.sexClassification}
          isPersonalBest={false}
        />
        <IndividualClassificationCard
          category='Geral'
          classification={runner.generalClassification}
          isPersonalBest={false}
        />
        <IndividualClassificationCard
          category='CatFE'
          classification={runner.teamClassification}
          isPersonalBest={true}
        />
      </section>
      <section>
        <IndividualTimeCard
          time={runner.liquidTime}
          label='Tempo Líquido'
          icon='watch icon'
        />
        <IndividualTimeCard
          time={runner.bruteTime}
          label='Tempo Bruto'
          icon='ampulhete icon'
        />
        <IndividualTimeCard
          time={runner.mediaPace}
          label='Pace Medio'
          icon='ampulhete icon'
        />
        <IndividualTimeCard
          time={runner.teamTime}
          label='Equipe'
          icon='team icon'
        />
      </section>
      <section>
        <Button text='Baixar certificado' />
        <Button text='Voltar' />
      </section>
      <section>
        <SocialMediaIcon icon='Whatsapp' handleClick={() => []} />
        <SocialMediaIcon icon='Insta' handleClick={() => []} />
      </section>
    </>
  );
};

export default Classification;
