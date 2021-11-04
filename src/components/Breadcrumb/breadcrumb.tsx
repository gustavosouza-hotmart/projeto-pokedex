import React from 'react';
import { Link } from 'react-router-dom';

import '@cosmos/breadcrumb/breadcrumb.css';

import { IBreadcrumbItem } from './breadcrumb.interfaces';

interface IProps {
  items: IBreadcrumbItem[];
}

function Breadcrumb(props: IProps) {

  return (
    <hot-breadcrumb class="_mx-5 _py-5">
      {props.items.map((item, i) => (
        <hot-breadcrumb-item key={i} {...(item.active && { active: true })}>
          {item.link
            ? <Link to={item.link}>{(item.textKey)}</Link>
            : (item.textKey)
          }
        </hot-breadcrumb-item>
      ))}
    </hot-breadcrumb>
  );
}

export default Breadcrumb;