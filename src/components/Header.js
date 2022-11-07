import React from "react";
import BreadcrumbExample from "./Breadcrumb";

class TopHeader extends React.Component {
    render() {
    return (
        <>
        <BreadcrumbExample />
        <header><h4>{this.props.title}</h4><br />
        </header>
        </>
    )
  }
  }

  export default TopHeader