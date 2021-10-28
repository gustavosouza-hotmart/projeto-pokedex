import React from 'react';
import { Link } from 'react-router-dom';
import '@cosmos/breadcrumb/breadcrumb.css';
import { IBreadcrumbItem } from './breadcrumb.interfaces';
import './breadcrumb.style.scss';

interface IProps {
  items: IBreadcrumbItem[];
}

function Breadcrumb(props: IProps) {

  return (
    <div className="_ml-4 _mr-4 _mt-3">
      <hot-breadcrumb>
        {props.items.map((item, i) => (
          <hot-breadcrumb-item key={i} {...(item.active && { active: true })}>
            {item.link
              ? <Link to={item.link}>{(item.textKey)}</Link>
              : (item.textKey)
            }
          </hot-breadcrumb-item>
        ))}
      </hot-breadcrumb>
    </div>
  );
}

export default Breadcrumb;