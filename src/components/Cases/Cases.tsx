import apartments from '../../image/apartments.webp';
import office from '../../image/office.webp';
import lens from '../../image/lens.webp';

import { Case } from './Case';

export function Cases() {
  return (
    <div className="mt-10">
      <div className="grid xl:grid-rows-1 md:grid-cols-4 md:grid-rows-2 sm:grid-cols-1 text-white">
        <div className="sm:col-span-1 md:col-span-2 md:h-76 xl:col-span-1 overflow-hidden">
          <img
            className="transition-all duration-1000 hover:scale-110"
            src={office}
            alt="office-img"
          />
        </div>
        <Case
          width={'sm:col-span-1 md:col-span-2 xl:col-span-1'}
          bgColor={'bg-emerald-500'}
          title={'Corporate learning portal for PayPal'}
          description={
            'This is how Itransition delivered a platform-based new hire training portal for PayPal,\n' +
            'helping to reduce the learning curve for newcomers.'
          }
        />
        <Case
          width={'sm:col-span-1 md:col-span-4 xl:col-span-2'}
          bg={'bg-mountains'}
          bgRepeat={'bg-no-repeat'}
          bgPosition={'bg-center'}
          bgCover={'bg-cover'}
          title={'Affiliate network portal for Expedia'}
          description={
            'Expedia teamed up with Itransition to revamp the Expedia Affiliate Network solution\n' +
            ' to redeem the leading position and boost revenues.'
          }
        />
      </div>
      <div className="grid xl:grid-rows-1 md:grid-cols-4 md:grid-rows-2 sm:grid-cols-1 text-white">
        <Case
          width={'sm:col-span-1 md:col-span-2 xl:col-span-1'}
          title={'A shoppable video platform for AiBUY'}
          description={
            'Find out how Itransition’s dedicated team helped AiBUY release their innovative\n' +
            ' machine learning-driven shoppable video platform.'
          }
          bgColor={'bg-emerald-600'}
        />
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-1 overflow-hidden">
          <img className="transition-all duration-1000 hover:scale-110" src={lens} alt="lens-img" />
        </div>
        <Case
          width={'sm:col-span-1 sm:h-76 md:col-span-2 xl:col-span-1'}
          textColor={'text-black'}
          title={'A furniture manufacturing software suite'}
          description={
            'Read the story behind Itransition’s 5-year collaboration with a leading UK furniture\n' +
            ' manufacturer on web, mobile and VR solutions.'
          }
        />
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-1 overflow-hidden">
          <img
            className="transition-all duration-1000 hover:scale-110"
            src={apartments}
            alt="apartments-img"
          />
        </div>
      </div>
    </div>
  );
}
