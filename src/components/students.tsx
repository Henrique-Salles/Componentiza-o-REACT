interface StudentProps {
  name: string;
  age: number;
}

export function Student({ name, age }: StudentProps) {
  return (
    <div>
      <h2>Aluno: {name}</h2>
      <h3>Idade: {age}</h3>
    </div>
  );
}
