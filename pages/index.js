import axios from "axios";
import InstitueFooter from '../components/instituecards/instituefooter'
import InstituteFaq from '../components/instituecards/institutefaq';
import InstituteHero from '../components/instituecards/institutehero';
import InstituteNav from '../components/instituecards/institutenav'
import InstituteResult from '../components/instituecards/instituteresult';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ServiceCarousel from "../components/instituecards/servicecarousel";
import TopServices from "../components/instituecards/topservices";
import WhyBeauty from "../components/instituecards/whybeauty";
import WhyChooseBeauty from "../components/instituecards/whychoosebeauty";
import ProffBeauty from "../components/instituecards/profbeauty";
const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchSitedata = async () =>
  await axios
    .get(`${dataurl}site-by-owner/1/`)
    .then((res) => ({
      error: null,
      sitedata: res.data,
    }))
    .catch(() => ({
      error: true,
      sitedata: null,
    }));

const fetchSiteFeature = async () =>
  await axios
    .get(`${dataurl}feature-by/1/`)
    .then((res) => ({
      error: null,
      featuredata: res.data,
    }))
    .catch(() => ({
      error: true,
      featuredata: null,
    }));

const fetchSiteContacts = async () =>
  await axios
    .get(`${dataurl}contact/1/`)
    .then((res) => ({
      error: null,
      contactsdata: res.data,
    }))
    .catch(() => ({
      error: true,
      contactsdata: null,
    }));

const fetchSiteFaq = async () =>
  await axios
    .get(`${dataurl}faq/1/`)
    .then((res) => ({
      error: null,
      faqdata: res.data,
    }))
    .catch(() => ({
      error: true,
      faqdata: null,
    }));

  const fetchTopService = async () =>
  await axios
    .get(`${dataurl}top-services/1/`)
    .then((res) => ({
      error: null,
      topdata: res.data,
    }))
    .catch(() => ({
      error: true,
      topdata: null,
    }));
export async function getServerSideProps(context) {
  const sitedata = await fetchSitedata();
  const featuredata = await fetchSiteFeature();
  const faqdata = await fetchSiteFaq();
  const contactsdata = await fetchSiteContacts();
  const topdata = await fetchTopService();

  return {
    props: {
      sitedata,
      featuredata,
      faqdata,
      contactsdata,
      topdata
    },
  //  revalidate: 3600,
  };
}

export default function Home({ sitedata, featuredata, faqdata, contactsdata,topdata }) {
  console.log(`${contactsdata.contactsdata}`);
  console.log(`${featuredata.featuredata}`);
  console.log(`${sitedata.sitedata}`);
  console.log(`${faqdata.faqdata}`);

  return (
    <div>
      <InstituteNav />
      {
        topdata.topdata != null ? (
          <div>
             <TopServices items={topdata.topdata} />
            </div>
        ):(
          <div>
            <h2>Data for top services is  not loading</h2>
            </div>
        )
      }
     {
         sitedata.sitedata != null ? (
          <div>
              <InstituteHero item={sitedata.sitedata[0]} />
            </div>
        ):(
          <div>
            <h2>Data for hero component is  not loading</h2>
            </div>
        )

     }
     {
        featuredata.featuredata != null ? (
          <div>
              <ServiceCarousel items={featuredata.featuredata.slice(0,8)} />
            </div>
        ):(
          <div>
            <h2>Data for features are  not loading</h2>
            </div>
        )

     }
     
     
      <WhyBeauty />
      {/* <InstituteResult items={featuredata.featuredata.slice(0,8)} /> */}
      <ProffBeauty />
      <WhyChooseBeauty />

      {/* <InstituteFaq items={faqdata.faqdata} /> */}
      <InstitueFooter />
    </div>
  );
}
