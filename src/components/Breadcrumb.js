import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Пользователи
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Записи</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;