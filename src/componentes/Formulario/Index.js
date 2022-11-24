/* eslint-disable no-unused-vars */
import "./Formulario.css";
import CampoTexto from "../CampoTexto/Index";
import ListaSuspensa from "../ListaSuspensa/index";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
    console.log("Form foi submetido => ", nome, cargo, imagem, time);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          label="Imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          obrigatorio={true}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
