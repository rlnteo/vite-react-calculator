import { useState } from 'react';
import { Operacija, RezultatKalkulacije } from '../../types/Kalkulator';
import { izracunaj } from './kalkulatorLogika';
import './Kalkulator.css';

export default function Kalkulator() {
  const [broj1, setBroj1] = useState<string>('');
  const [broj2, setBroj2] = useState<string>('');
  const [rezultat, setRezultat] = useState<RezultatKalkulacije | null>(null);
  const [aktivnaOp, setAktivnaOp] = useState<Operacija | null>(null);

  const operacije: { simbol: Operacija; naziv: string }[] = [
    { simbol: '+', naziv: 'Saberi' },
    { simbol: '-', naziv: 'Oduzmi' },
    { simbol: '*', naziv: 'Pomnoži' },
    { simbol: '/', naziv: 'Podeli' },
  ];

  const handleIzracunaj = (operacija: Operacija) => {
    const n1 = parseFloat(broj1);
    const n2 = parseFloat(broj2);

    if (isNaN(n1) || isNaN(n2)) {
      setRezultat({ vrednost: null, greska: 'Unesite validne brojeve u oba polja.' });
      setAktivnaOp(operacija);
      return;
    }

    setAktivnaOp(operacija);
    const res = izracunaj(n1, n2, operacija);
    setRezultat(res);
  };

  const handleReset = () => {
    setBroj1('');
    setBroj2('');
    setRezultat(null);
    setAktivnaOp(null);
  };

  const formatRezultat = (vrednost: number): string => {
    if (Number.isInteger(vrednost)) return vrednost.toString();
    return parseFloat(vrednost.toFixed(10)).toString();
  };

  return (
    <div className="kalkulator-wrapper">
      <h1>Kalkulator</h1>

      <div className="input-group">
        <label htmlFor="broj1">Broj 1</label>
        <input
          id="broj1"
          type="number"
          placeholder="npr. 10"
          value={broj1}
          onChange={(e) => setBroj1(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="broj2">Broj 2</label>
        <input
          id="broj2"
          type="number"
          placeholder="npr. 5"
          value={broj2}
          onChange={(e) => setBroj2(e.target.value)}
        />
      </div>

      <div className="operacije-grid">
        {operacije.map((op) => (
          <button
            key={op.simbol}
            className={`op-button ${aktivnaOp === op.simbol ? 'aktivan' : ''}`}
            onClick={() => handleIzracunaj(op.simbol)}
          >
            <span className="op-simbol">{op.simbol}</span>
            <span className="op-naziv">{op.naziv}</span>
          </button>
        ))}
      </div>

      {rezultat !== null && (
        <div className={`rezultat-box ${rezultat.greska ? 'greska' : 'uspeh'}`}>
          {rezultat.greska ? (
            <p className="greska-poruka">{rezultat.greska}</p>
          ) : (
            <p className="rezultat-vrednost">
              = {formatRezultat(rezultat.vrednost!)}
            </p>
          )}
        </div>
      )}

      <button className="reset-button" onClick={handleReset}>
        Resetuj
      </button>
    </div>
  );
}
