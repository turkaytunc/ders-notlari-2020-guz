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
          <a href="#notlar" className="index-link">
            Notlar
          </a>
          <a href="#compiler" className="index-link">
            Compiler
          </a>
          <a href="#derleme-asamalari" className="index-link">
            Derleme Aşamaları
          </a>
          <a href="#otomatlar" className="index-link">
            Otomatlar
          </a>
        </section>
        <section className="notes">
          <div id="notlar">
            <h2 style={{ fontWeight: 'normal' }}>Notlar</h2>
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
            <p id="compiler" style={{ fontSize: '1.5em', marginBottom: '1em' }}>
              Compiler
            </p>
            <div
              className="notes-paragraph"
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                border: '1px dashed black',
              }}
            >
              <RectangleInfo
                width={90}
                height={30}
                content={'Source Text'}
                radius={5}
              />
              <p>=={'>'}</p>
              <RectangleInfo
                width={90}
                height={45}
                content={'Frontend (analysis)'}
                radius={5}
              />
              <p>=={'>'}</p>
              <RectangleInfo
                width={130}
                height={45}
                content={'Semantic Representation'}
                radius={5}
              />
              <p>=={'>'}</p>
              <RectangleInfo
                width={90}
                height={45}
                content={'Backend (synthesis)'}
                radius={5}
              />
              <p>=={'>'}</p>
              <RectangleInfo
                width={90}
                height={45}
                content={'Executable'}
                radius={5}
              />
            </div>
            <p
              id="derleme-asamalari"
              style={{ fontSize: '1.5em', marginBottom: '1em' }}
            >
              Derleme Aşamaları
            </p>
            <div
              className="notes-paragraph"
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                border: '1px dashed black',
              }}
            >
              <RectangleInfo
                width={90}
                height={30}
                content={'Kaynak kod'}
                radius={20}
              />
              <p>={'>'}</p>
              <RectangleInfo
                width={90}
                height={50}
                content={'Lexical Analysis'}
                radius={5}
              />
              <p>-{'>'}</p>
              <RectangleInfo
                width={90}
                height={50}
                content={'Syntax Analysis'}
                radius={5}
              />
              <p>-{'>'}</p>
              <RectangleInfo
                width={90}
                height={50}
                content={'Semantic Analysis'}
                radius={5}
              />
              <p>-{'>'}</p>
              <RectangleInfo
                width={90}
                height={70}
                content={'Intermediate Code Generation'}
                radius={5}
              />
              <p>-{'>'}</p>
              <RectangleInfo
                width={90}
                height={50}
                content={'Code Optimization'}
                radius={5}
              />
              <p>-{'>'}</p>
              <RectangleInfo
                width={90}
                height={50}
                content={'Code Generation'}
                radius={5}
              />
              <p>={'>'}</p>
              <RectangleInfo
                width={90}
                height={30}
                content={'Hedef kod'}
                radius={20}
              />
            </div>
            <p
              id="otomatlar"
              style={{ fontSize: '1.5em', marginBottom: '1em' }}
            >
              Otomatlar
            </p>
            <p className="notes-paragraph">
              - Automata kelimesi Yunanca kökenli bir kelime olup, kendi kendine
              eylemede bulunabilen anlamına gelmektedir.
            </p>
            <p className="notes-paragraph">
              - Bir otomat,önceden belirlenmiş bir işlemler dizisini takip
              ederek kendiliğinden çalışabilen soyut bir bilgisayım cihazıdır.
            </p>
            <p className="notes-paragraph">
              - 1950'li yıllarda Stephen Kleene, sonlu bir bellekle donatılmış
              soyut durum makineleri olan sonlu otomatları ortaya atmıştır.
            </p>
            <p className="notes-paragraph">
              - Alan Turing 1936 yılında Turing Makinası kavramını ortaya
              atmıştır.
            </p>
            <p className="notes-paragraph"></p>
            <p className="notes-paragraph"></p>
          </div>
        </section>
      </section>
    </section>
  );
};
