import styled from "styled-components";

const LoaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .loader {
    width: 50px;
    height: 50px;
    background-image: url("https://www.negocioseguroaig.com.br/wp-content/uploads/2020/09/carregar.gif");
    background-size: contain;
  }
`;

export default function Loader() {
  return (
    <LoaderContent>
      <div className="loader"></div>
    </LoaderContent>
  );
}
