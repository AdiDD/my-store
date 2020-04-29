import styled from "styled-components";

import { ReactComponent as PlusIconSVG } from "../../assets/plus-icon.svg";
import { ReactComponent as MinusIconSVG } from "../../assets/minus-icon.svg";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const MinusIcon = styled(MinusIconSVG)`
  color: red;
  width: 15px;
`;

export const PlusIcon = styled(PlusIconSVG)`
  color: green;
  width: 15px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
