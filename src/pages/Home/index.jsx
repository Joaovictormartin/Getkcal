import React, { useState } from "react";

import { Result } from "../../components/Result";

import { Container, Content, WraperLabel, Label } from "./styles";

export function Home() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Content>
        <WraperLabel>
          <Label>Seu sexo</Label>
        </WraperLabel>
        <select
          id="sex"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value=""></option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>

        <WraperLabel>
          <Label>Sua idade</Label>
        </WraperLabel>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <WraperLabel>
          <Label>Seu peso</Label>
        </WraperLabel>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <WraperLabel>
          <Label>Sua altura</Label>
        </WraperLabel>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <WraperLabel>
          <Label>Seu nível de atividade fisíca</Label>
        </WraperLabel>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value=""></option>
          <option value="1.2">Sedentário</option>
          <option value="1.375">Pouca atividade</option>
          <option value="1.55">Atividade moderada</option>
          <option value="1.725">Atividade intensa</option>
          <option value="1.9">Atividade muito intensa</option>
        </select>

        <button type="submit" onClick={() => setToggle(!toggle)}>
          Calcular
        </button>

        {toggle && (
          <Result
            gender={gender}
            age={age}
            weight={weight}
            height={height}
            activityLevel={activityLevel}
          />
        )}
      </Content>
    </Container>
  );
}
