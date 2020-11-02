import './formel-diller.scss';
import React from 'react';
import { RectangleInfo } from '../rectangle-info/RectangleInfo';

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
            <p className="notes-paragraph">
              - Bir derleyici, birprogramlama dilinde (kaynakdil) yazılmış olan
              bir kaynak kodun başka bir bilgisayar diline (hedefdil)
              dönüştürülmesi işini yerine getiren program ya da programlar
              kümesidir.
            </p>
            <div
              className="notes-paragraph"
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <RectangleInfo
                width={90}
                height={30}
                content={'Source Text'}
                radius={5}
              />
              <p>==={'>'}</p>
              <RectangleInfo
                width={90}
                height={45}
                content={'Frontend (analysis)'}
                radius={5}
              />
              <p>==={'>'}</p>
              <RectangleInfo
                width={130}
                height={45}
                content={'Semantic Representation'}
                radius={5}
              />
              <p>==={'>'}</p>
              <RectangleInfo
                width={90}
                height={45}
                content={'Backend (synthesis)'}
                radius={5}
              />
              <p>==={'>'}</p>
            </div>
            <p className="notes-paragraph"></p>
            <p className="notes-paragraph"></p>
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
