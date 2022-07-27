import github from "../../assets/github.svg";
import { Logo, Container } from "./styled";

export function Header() {
  return (
    <>
      <Container>
        <Logo src={github} alt="logotipo github" />
      </Container>
    </>
  );
}
