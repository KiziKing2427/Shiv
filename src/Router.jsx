import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home'; // Import Home component
import AddProducts from './components/AddProducts'; // Import AddProducts component
import ShowProducts from './components/ShowProducts';
import CreateAccount  from './components/CreateAccount';
import Root from './components/Roots';
import Authenticate from './components/Authenticate';
import Bangkok from './components/Bangkok/Bangkok';
import BangkokMSW from './components/Bangkok/BangkokMSW';
import BangkokMSWPay from './components/Bangkok/BangkokMSWPay'; // Corrected import
import LearnMore from './components/Bangkok/BangkokLearnMore';
import OneDayKanchanaBridgeKwai from './components/Bangkok/OneDayKanchanaBridgeKwai'; 
import OneDayKanchanaBridgeKwaiPay from './components/Bangkok/OneDayKanchanaBridgeKwaiPay'; 
import ChaoPDCruise from './components/Bangkok/ChaoPDCruise'; 
import ChaoPDCruisePay from './components/Bangkok/ChaoPDCruisePay'; 
import ThreeTempleAndGPTB from './components/Bangkok/ThreeTempleAndGPTB';
import ThreeTempleAndGPTBPay from './components/Bangkok/ThreeTempleAndGPTBPay';
import GrandPearlDinnerCruiseB from './components/Bangkok/GrandPearlDinnerCruiseB';
import GrandPearlDinnerCruiseBPay from './components/Bangkok/GrandPearlDinnerCruiseBPay'; 
import BangkokAncientCityAndEM from './components/Bangkok/BangkokAncientCityAndEM';
import BangkokAncientCityAndEMPay from './components/Bangkok/BangkokAncientCityAndEMPay'; 
import BangkokCityTT from './components/Bangkok/BangkokCityTT';
import BangkokCityTTPay from './components/Bangkok/BangkokCityTTPay'; 
import BangkokCityShoppingT from './components/Bangkok/BangkokCityShoppingT';
import BangkokCityShoppingTPay from './components/Bangkok/BangkokCityShoppingTPay';
import SafariWorldAndMPB from './components/Bangkok/SafariWorldAndMPB';
import SafariWorldAndMPBPay from './components/Bangkok/SafariWorldAndMPBPay';
import WhiteOrchidDinnerCruise from './components/Bangkok/WhiteOrchidDinnerCruise';
import WhiteOrchidDinnerCruisePay from './components/Bangkok/WhiteOrchidDinnerCruisePay'; 
import DamnoenSadukAndMRMB from './components/Bangkok/DamnoenSadukAndMRMB';
import DamnoenSadukAndMRMBPay from './components/Bangkok/DamnoenSadukAndMRMBPay';
import SiamAmazingThemePark from './components/Bangkok/SiamAmazingThemePark';
import SiamAmazingThemeParkPay from './components/Bangkok/SiamAmazingThemeParkPay'; 
import SamphranElephantZoo from './components/Bangkok/SamphranElephantZoo';
import SamphranElephantZooPay from './components/Bangkok/SamphranElephantZooPay'; 
import AmphawaFloatingMarketBangkok from './components/Bangkok/AmphawaFloatingMarketBangkok';
import AmphawaFloatingMarketBangkokPay from './components/Bangkok/AmphawaFloatingMarketBangkokPay'; 
import BangkokDreamWorldPark from './components/Bangkok/BangkokDreamWorldPark';
import BangkokDreamWorldParkPay from './components/Bangkok/BangkokDreamWorldParkPay'; 
import EveningFoodTourTukTuk from './components/Bangkok/EveningFoodTourTukTuk';
import EveningFoodTourTukTukPay from './components/Bangkok/EveningFoodTourTukTukPay'; 
import EveningWalkingCityTourBangkok from './components/Bangkok/EveningWalkingCityTourBangkok';
import EveningWalkingCityTourBangkokPay from './components/Bangkok/EveningWalkingCityTourBangkokPay'; 
import SealifeOceanWorldMTB from './components/Bangkok/SealifeOceanWorldMTB';
import SealifeOceanWorldMTBPay from './components/Bangkok/SealifeOceanWorldMTBPay'; 
import Logout from './components/Logout';
import Product from './components/Product'; 


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root/>, // Render Home component for root path
            children: [
               {
                  path: "/",
                  element: <Home />, // Render Home component for root path
                  index: true
               },
               {
                  path: "/addProducts",
                  element: <AddProducts />, // Wrap AddProducts with ProtectedRoutes
              },
               {
                  path: "/showProducts",
                  element: <ShowProducts />, 
               },
               {
                  path: "/createAccount",
                  element: <CreateAccount />, 
               },
               {
                  path: "/authenticate",
                  element: <Authenticate />, 
               },
               {
                  path: "/bangkok",
                  element: <Bangkok />, 
               },
               {
                  path: "/bangkokMSW",
                  element: <BangkokMSW />, 
               },
               {
                  path: "/bangkokMSWPay", // Define prod_id as a URL parameter
                  element: <BangkokMSWPay />, // Render Checkout component
              },
              {
                  path:"/oneDayKanchanaBridgeKwai",
                  element: <OneDayKanchanaBridgeKwai />,
              },
              {
               path:"/oneDayKanchanaBridgeKwaiPay",
               element: <OneDayKanchanaBridgeKwaiPay />,
              },
              {
               path:"/chaoPDCruise",
               element: <ChaoPDCruise />, 
              },
              {
               path:"/chaoPDCruisePay",
               element: <ChaoPDCruisePay />, 
              },
              {
               path:"/threeTempleAndGPTB",
               element: <ThreeTempleAndGPTB />, 
              },
              {
               path:"/threeTempleAndGPTBPay",
               element: <ThreeTempleAndGPTBPay />,
              },
              {
               path:"/grandPearlDinnerCruiseB",
               element: <GrandPearlDinnerCruiseB />, 
              },
              {
               path:"/grandPearlDinnerCruiseBPay",
               element: <GrandPearlDinnerCruiseBPay />,
              },
              {
               path:"/bangkokAncientCityAndEM",
               element: <BangkokAncientCityAndEM />, 
              },
              {
               path:"/bangkokAncientCityAndEMPay",
               element: <BangkokAncientCityAndEMPay />,
              },
              {
               path:"/bangkokCityTT",
               element: <BangkokCityTT />, 
              },
              {
               path:"/bangkokCityTTPay",
               element: <BangkokCityTTPay />, 
              },
              {
               path:"/bangkokCityShoppingT",
               element: <BangkokCityShoppingT />, 
              },
              {
               path:"/bangkokCityShoppingTPay",
               element: <BangkokCityShoppingTPay />,
              },
              {
               path:"/safariWorldAndMPB",
               element: <SafariWorldAndMPB />, 
              },
              {
               path:"/safariWorldAndMPBPay",
               element: <SafariWorldAndMPBPay />,
              },
              {
               path:"/whiteOrchidDinnerCruise",
               element: <WhiteOrchidDinnerCruise />, 
              },
              {
               path:"/whiteOrchidDinnerCruisePay",
               element: <WhiteOrchidDinnerCruisePay />,
              },
              {
               path:"/damnoenSadukAndMRMB",
               element: <DamnoenSadukAndMRMB />, 
              },
              {
               path:"/damnoenSadukAndMRMBPay",
               element: <DamnoenSadukAndMRMBPay />,
              },
              {
               path:"/siamAmazingThemePark",
               element: <SiamAmazingThemePark />, 
              },
              {
               path:"/siamAmazingThemeParkPay",
               element: <SiamAmazingThemeParkPay />,
              },
              {
               path:"/samphranElephantZoo",
               element: <SamphranElephantZoo />, 
              },
              {
               path:"/samphranElephantZooPay",
               element: <SamphranElephantZooPay />,
              },
              {
               path:"/amphawaFloatingMarketBangkok",
               element: <AmphawaFloatingMarketBangkok />, 
              },
              {
               path:"/amphawaFloatingMarketBangkokPay",
               element: <AmphawaFloatingMarketBangkokPay />,
              },
              {
               path:"/bangkokDreamWorldPark",
               element: <BangkokDreamWorldPark />, 
              },
              {
               path:"/bangkokDreamWorldParkPay",
               element: <BangkokDreamWorldParkPay />,
              },
              {
               path:"/eveningFoodTourTukTuk",
               element: <EveningFoodTourTukTuk />, 
              },
              {
               path:"/eveningFoodTourTukTukPay",
               element: <EveningFoodTourTukTukPay />,
              },
              {
               path:"/eveningWalkingCityTourBangkok",
               element: <EveningWalkingCityTourBangkok />, 
              },
              {
               path:"/eveningWalkingCityTourBangkokPay",
               element: <EveningWalkingCityTourBangkokPay />,
              },
              {
               path:"/sealifeOceanWorldMTB",
               element: <SealifeOceanWorldMTB />, 
              },
              {
               path:"/sealifeOceanWorldMTBPay",
               element: <SealifeOceanWorldMTBPay />,
              },



              {
                  path: "/learn-more",
                  element: <LearnMore />, 
               },
               {
                  path: "/product",
                  element: <Product />, 
               },
               {
                  path: "/logout",
                  element: <Logout />, 
               }
       ] 
   }
]
);

export default router;
