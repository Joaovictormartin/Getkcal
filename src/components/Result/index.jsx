import React from "react";

import { Container, Title, Content } from "./styles";

export function Result({ gender, age, weight, height, activityLevel }) {
  const tmb = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );
  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;
  const height100 = height/100;
  const imc = weight / (height100*height100);

  console.log(tmb);

  return (
    <Container>
      <Title>Aqui está o resultado:</Title>

      <Content>
        <ul>
          <li>
            Seu IMC - (Índice de Massa Corporal) foi de{" "}
            <strong>{imc ? imc.toFixed(2) : 0}</strong>.
          </li>
          <li>
            Seu metabolismo basal é de <strong>${tmb && tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média{" "}
            <strong>${maintenance && maintenance} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média{" "}
            <strong>${loseWeight && loseWeight} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média{" "}
            <strong>${gainWeight && gainWeight} calorias</strong>.
          </li>
        </ul>
      </Content>
    </Container>
  );
}
