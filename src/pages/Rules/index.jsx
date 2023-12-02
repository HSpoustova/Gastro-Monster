import './style.css';
import { useMaskot } from '../../components/useMaskot.jsx';
import maskotEggSad from '../FieldPick/img/maskot-egg-sad.png';
import { Nav } from '../../components/Nav';
import nav from '../FieldPick/img/nav.png';

export const Rules = () => {
  const { isVisible, isTextVisible, text, maskotRef, textRef, isTextShaking } =
    useMaskot({
      delay: 400,
      textProp: 'Napapat!',
    });

  return (
    <div className="rules-container">
      <h1 className="rules-heading">Pravidla hry</h1>
      <p>
        Vítej ve hře Gastro monster! Do naší hry se zatoulala fialová hladová
        příšerka, která od tebe bude potřebovat abys ji nakrmil/a. Stejně jako
        ty potřebuje správnou stravu, aby mohla vyrůst v silné a zdravé fialové
        monstrum.
      </p>
      <p className="indented-paragraph">
        Na začátku hry si vybereš jednu z oblastí, kterým se chceš věnovat. Mezi
        oblastmi můžeš vybírat maso, mléko, ovoce a zeleninu nebo pečivo. Po
        výběru oblasti se objevíš na hrací ploše. Tvým cílem je dojít na konec
        mapy a cestou nakrmit příšerku, aby vyrostla. Klikni na příšerku a odpověz na otázku. Příšerka dostane jídlo pokaždé, když
        odpovíš správně, ale pozor – potraviny, které máš pro příšerku
        připravené, ti ubývají i když odpovíš špatně! Může se tedy stát, že ti
        dojdou potraviny a nebudeš mít čím příšerku nakrmit, a hra tak pro tebe
        skončí.
      </p>
      <p className="indented-paragraph">
        Hodně štěstí a nenech příšerku hladovět!
      </p>
      <div className='nav-buttons-rules'>
      <Nav text="Hrát" to="/fieldPick" backgroundImage={nav} />
      <Nav text="Zpět" to="/" backgroundImage={nav} />
      </div>
      <div className="maskot-container">
        {isTextVisible && (
          <div
            ref={textRef}
            className={`maskot-text-bubble ${
              isTextShaking ? 'shaking-text' : ''
            }`}
          >
            {text}
          </div>
        )}
        <div ref={maskotRef} className={`maskot ${isVisible ? 'active' : ''}`}>
          <img className="maskot-pic" src={maskotEggSad} alt="Maskot" />
        </div>
      </div>
    </div>
  );
};
