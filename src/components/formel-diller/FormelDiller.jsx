import './formel-diller.scss';
import React from 'react';

export const FormelDiller = () => {
  return (
    <section className="formel-diller-container">
      <header className="formel-diller-title">Formel Diller</header>
      <section className="formel-diller-content">
        <section className="table-of-contents">
          <div className="index">İçindekiler</div>
          <a href="#hafta-1" className="index-link">
            1. Hafta
          </a>
          <a href="#hafta-2" className="index-link">
            2. Hafta
          </a>
          <a href="#hafta-3" className="index-link">
            3. Hafta
          </a>
        </section>
        <section className="notes">
          <div id="hafta-1">
            <h2 style={{ fontWeight: 'normal' }}>1.Hafta</h2>
            <p className="notes-paragraph">
              - İlk formel dil Gottlob Frege tarafından 1879 yılında tanımlanmış
              olup birinci dereceden mantık (first-order logic) olarak
              adlandırılmaktadır.
            </p>
            <p className="notes-paragraph">
              - Bilgisayar bilimlerinde formel diller programlama dillerinin
              kesin ve katı kurallarını tanımlamada kullanılmaktadır.Bu yönüyle
              derleyicilerin de temellerini oluşturmaktadırlar.
            </p>
          </div>
          <div id="hafta-2">
            <h2 style={{ fontWeight: 'normal' }}>2.Hafta</h2>
            <div>2.hafta icerigi</div>
          </div>
          <div id="hafta-3">
            <h2 style={{ fontWeight: 'normal' }}>3.Hafta</h2>
            <div>3.hafta icerigi</div>
          </div>
        </section>
      </section>
    </section>
  );
};
