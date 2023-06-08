import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["tarefa1", "tarefa2", "tarefa3"])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => { 
    setLista([...lista, novaTarefa]);
    setNovaTarefa("")
  };

  const removeTarefa = (item) => { 
    const remover = [...lista];
    remover.splice(item, 1);
    setLista(remover);
  };
  

  const listaRenderizada = lista.map((item, index) => {
    return <Tarefa key={index}> <p>{item}</p>
      <RemoveButton onClick={removeTarefa}>
        <img src={bin} alt="" width="16px" />
      </RemoveButton>
    </Tarefa>
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
  
      <ListaContainer>
        {listaRenderizada}
      </ListaContainer>
    </ListaTarefasContainer>
  );
  
}
