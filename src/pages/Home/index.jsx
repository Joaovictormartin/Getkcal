import React, { useState, useCallback } from "react";

import { Container, Content, WraperLabel, Label } from "./styles";

export function Home() {
  const [sex, setSex] = useState("Masculino");
  const [age, setAge] = useState("");
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [activityLevel, setactivityLevel] = useState("");

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

  },[])

  return (
    <Container>
      <Content>

        <WraperLabel>
          <Label>Seu sexo</Label>
        </WraperLabel>
        <select 
          id="sex" 
          value={sex} 
          onChange={(e) => setSex(e.target.value)}
        >
          <option value=""></option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
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
          value={Weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <WraperLabel>
          <Label>Sua altura</Label> 
        </WraperLabel>
        <input
          type="text"
          value={Height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <WraperLabel>
          <Label>Seu nível de atividade fisíca</Label>
        </WraperLabel>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setactivityLevel(e.target.value)}
        >
          <option value=""></option>
          <option value="1.2">Sedentário</option>
          <option value="1.375">Pouca atividade</option>
          <option value="1.55">Atividade moderada</option>
          <option value="1.725">Atividade intensa</option>
          <option value="1.9">Atividade muito intensa</option>
        </select>

        <button type="submit" onClick={handleSubmit}>Calcular</button>
      </Content>
    </Container>
  );
}
