import microsoft from '../../image/microsoft.jpg';
import adobe from '../../image/adobe.png';
import saleforce from '../../image/saleforce.png';
import sap from '../../image/sap.png';

export function Partners() {
  return (
    <div className="w-4/5 pt-10 m-auto">
      <h4 className="text-center text-2xl">Partners:</h4>
      <div className="w-full flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:flex-wrap md:mt-8">
        <img className="m-1" src={microsoft} width={220} alt="microsoft-logo" />
        <img className="m-1" src={adobe} width={150} alt="adobe-logo" />
        <img className="mt-4" src={saleforce} width={200} alt="saleforce-logo" />
        <img className="mt-4" src={sap} width={250} alt="sap-logo" />
      </div>
    </div>
  );
}
