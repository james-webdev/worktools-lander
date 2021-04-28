import React from 'react';
import CyberBook from '../components/CyberBook';
import DropdownMenu from '../components/DropDown';
import GettingCertified from '../components/GettingCertified';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import CyberEssentialsLogo from '../svg/CyberEssentialsLogo';
import CyberEssentialsPlusLogo from '../svg/CyberEssentialsPlusLogo';
import Kitty from '../svg/kitty';

const CyberEssentials = () => {
  return (
    <>
      <Header />
      <div className="border border-black flex flex-col justify-center items-start p-4 mt-5 sm:flex">
        <div className="ml-5 mr-5">
          <div className="sm:w-1/3">
            <Kitty />
          </div>

          <div className="border border-black sm:flex">
            <div className="border border-black text-4xl font-bold">
              <h1>What is Cyber Essentials?</h1>
            </div>

            <p className="border border-black mt-4 mr-10 border border-black">
              {' '}
              Cyber Essentials is a government-backed scheme helping you to guard your organisation,
              whatever its size, against a range of the most common cyber attacks.
            </p>
          </div>
        </div>
        <div className="border border-black mt-10 mr-4 ml-4 sm:flex sm:flex-row-reverse sm:mt-20">
          <div className="border border-black text-3xl font-bold sm:text-4xl">
            {' '}
            <p>The two types of certification</p>
          </div>
          <div className="mt-5 flex p-4">
            <div className="border border-black">
              <CyberEssentialsLogo />
            </div>
            <div className="border border-black text-base ml-2 flex justify-center items-center">
              <p>Lightweight and easy to follow self-assessed certification.</p>
            </div>
          </div>
          <div className="border border-black flex p-4">
            <div className="border border-black">
              <CyberEssentialsPlusLogo />
            </div>
            <div className="border border-black text-base flex ml-2 justify-center items-center">
              <p>Verified by independant Certification Body.</p>
            </div>
          </div>
          <div>
            <p className="border border-black mr-16 mt-3 sm:hidden">
              Both options give protection against a wide variety of the most common cyber attacks.
            </p>{' '}
          </div>
        </div>
        <div className="border border-black sm:mr-5 sm:ml-5 sm:mt-20">
          <div className="text-center">
            <h1 className="border border-black text-3xl ml-6 mr-6 mt-10 font-bold">Why get Cyber Essentials?</h1>
          </div>
          <div className="sm:flex sm:justify-around sm:mt-6">
            <div className="border border-black tab1 p-10 m-3 ml-5 mr-5 text-center text-lg font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg">
              {' '}
              <p>Certified cyber security</p>
            </div>
            <div className="border border-black tab2 p-10 m-3 ml-5 mr-5 text-center sm:text-lg font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg">
              <p>Reassure customers that they are secure</p>
            </div>
            <div className="border border-black tab3 p-10 m-3 ml-5 mr-5 text-center sm:text-lg font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg">
              <p>Attract new business with evidence of cyber security measures in place</p>
            </div>
          </div>
          <div className="border border-black sm:flex sm:justify-around sm:mt-4">
            <div className="tab3 p-10 m-3 ml-5 mr-5 text-center sm:text-lg sm:w-1/3 font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg">
              {' '}
              <p>Have a clear picture of your organisation's security level</p>
            </div>
            <div className="border border-black tab1 p-10 m-3 ml-5 mr-5 text-center sm:text-lg sm:w-1/3 font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg">
              <p>Some government contracts require Cyber Essentials certification</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-3 ml-2 text-left">
          <div className="p-2 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p>Certified cyber security</p>
          </div>
          <div className="p-2 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p>Reassure customers that they are secure</p>
          </div>
          <div className="p-2 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p>Attract new business with evidence of cyber security measures in place</p>
          </div>
          <div className="p-2 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p>Have a clear picture of your organisation's security level</p>
          </div>
          <div className="p-2 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p>Some government contracts require Cyber Essentials certification</p>
          </div>
        </div> */}
      </div>

      <div className="border border-black tab3 mt-20 mb-8 ml-10 mr-10 sm:ml-48 sm:mr-48 ">
        <GettingCertified />
        <div />
      </div>
      <div className="border border-black flex flex-col justify-center items-start poppins p-4 mt-5 ml-5 mr-5 sm:flex">
        <div className="sm:flex sm:mt-20">
          <h2 className="border border-black text-3xl font-bold sm:text-4xl">Government Contracts</h2>
          <p className=" border border-black mt-4 sm:w-2/3">
            If you would like to bid for central government contracts which involve handling
            sensitive and personal information or the provision of certain technical products and
            services, you will require Cyber Essentials Certification. More information is available
            on the{' '}
            <a className="complianceblue text-white rounded" href="https://gov.uk">
              Gov.UK website{' '}
            </a>
          </p>
        </div>
        <div className="border border-black sm:mt-20 sm:mb-20">
          <p className="border border-black text-3xl mt-8 font-bold">£25,000 of Cybersecurity insurance cover</p>
          <p className="border border-black mt-4">
            Having achieved Cyber Essentials compliance a company is then eligible for £25,000 of
            cybersecurity insurance cover from AXA that can be used for:
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center border-2 complianceborder ml-8 mr-8 p-4 mt-5 mb-20 text-center sm:flex">
        <div className="text-left">
          <div className="dropdown p-1 flex justify-between items-center">
            <p>Liability</p>
            <DropdownMenu words="Claims made against you arising out of media activities and privacy and security wrongful acts." />
          </div>
          <div className="dropdown p-1 flex items-center justify-between">
            <p>Extortion Demands</p>
            <DropdownMenu words="Ransoms and other cyber extortion." />
          </div>
          <div className="dropdown p-1 flex items-center justify-between">
            <p>Business Interuption</p>
            <DropdownMenu words="Loss of profit and/or operational expenses caused by a network compromise" />
          </div>
          <div className="dropdown p-1 flex items-center justify-between">
            <p>Event management</p>
            <DropdownMenu words="Costs, including emergency costs, following a data breach, including the costs of notifying data subjects. These might typically include payment for Legal, IT, Forensic & PR specialists." />
          </div>
          <div className="dropdown p-1 flex items-center justify-between">
            <p>Regulatory Investigations</p>
            <DropdownMenu words="Defence costs & regulatory fines (where insurable by law)." />
          </div>
          <div className="dropdown p-1 flex items-center justify-between">
            <p>Loss of Electronic Data</p>
            <DropdownMenu words="Costs of remedying the issue that allowed the loss or damage to your data and costs to replace, restore or update your data." />
          </div>
        </div>
      </div> */}
      <CyberBook />
    </>
  );
};

export default CyberEssentials;
