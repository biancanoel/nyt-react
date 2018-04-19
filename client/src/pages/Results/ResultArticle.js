import React from 'react';

export const ResultArticle = (props) => {

    return (
   <li> {props.headline }  {props.byline}  {props.pub_date} <a Read now  href={props.url}/> </li>
    )
}

