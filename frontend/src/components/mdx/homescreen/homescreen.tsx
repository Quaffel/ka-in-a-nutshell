import homescreenStyles from './homescreen.module.scss';
import React from "react";

export function Homescreen({ src, text }: { src: string, props: string, alt: string, text: string }): React.ReactElement {
  return <div className={`${homescreenStyles["homeContainer"]}`} style={{backgroundImage: `url(${src})`}} >
    <div className={`${homescreenStyles["homeContainer-inside"]}`}>
      {text}
    </div>
  </div>;
}
