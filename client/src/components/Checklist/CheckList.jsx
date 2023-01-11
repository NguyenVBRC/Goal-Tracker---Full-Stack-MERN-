import React from 'react';
import "./checkList.css"

export default function CheckList() {
  return (
    <section className='list__container'>
        <h3> Check List</h3>
        <div className='details'>
        <div className='checklist'></div>
        <aside className='checklist'></aside>
      </div>
    </section>
  )
}
