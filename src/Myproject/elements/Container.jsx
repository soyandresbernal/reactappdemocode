import styled from "styled-components";

//?solo aplica al elemento div
export default styled.div`
  margin-right: auto;
  margin-left: auto;
  width: min(
    1100px,
    95%
  ); /*De todas las unidades despues, eligira menor
  el 95% sea menor usara 1100*/
`;
