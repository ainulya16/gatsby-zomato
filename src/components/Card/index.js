import React from 'react';
import styled from 'styled-components';
import {
 string, oneOfType, node, arrayOf,
} from 'prop-types';

const CardBase = styled.div`
  @media (max-width: 992px) {
    padding: 0 40px;
  }
`;
const H6 = styled.h6`
  font-weight: bold;
  max-lines:2;
  font-size: 14pt;
  height: 30pt;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const P = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
`;

const Card = ({
 title, description, children, ...attr
}) => {
  return (
    <CardBase className="text-center" {...attr}>
      {title && <H6>{title}</H6>}
      {description && <P>{description}</P>}
      {children}
    </CardBase>
  );
};

Card.propTypes = {
  title: string,
  description: string,
  children: oneOfType([node, arrayOf(node)]),
};
Card.defaultProps = {
  title: '',
  description: '',
  children: null,
};

export default Card;
