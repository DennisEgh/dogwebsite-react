import React from 'react'
import { Link, useParams } from "react-router-dom";
export default function AdoptInfo({data}) {
    const { id } = useParams();
    const datas = data.find((data) => +data.id === +id);

  return (
<div>
    <img src={datas.image.url} alt="" />
    <h3>{datas.name}</h3>
</div>
  )
}
