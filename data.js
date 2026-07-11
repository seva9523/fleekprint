const IMPACT_FACTORS={mixed:{label:'Mixed',co2:6,water:1000},denim:{label:'Denim',co2:7.4,water:1500},tshirts:{label:'T-shirts',co2:5.1,water:900},jackets:{label:'Jackets',co2:8.2,water:1200},hoodies:{label:'Hoodies',co2:6.5,water:1100}};

const SEED_ORDERS=[
  {id:'FLK-2026-1037',buyer:'Primark (Demo)',seller:'Vintage World UK',items:4500,weight:3100,value:40500,category:'mixed',date:'2026-03-18'},
  {id:'FLK-2026-1038',buyer:'Primark (Demo)',seller:'Berlin Vintage Supply',items:3000,weight:1900,value:30000,category:'tshirts',date:'2026-04-09'},
  {id:'FLK-2026-1039',buyer:'Primark (Demo)',seller:'Milan Archive Wholesale',items:8000,weight:5800,value:84000,category:'jackets',date:'2026-05-02'},
  {id:'FLK-2026-1040',buyer:'Primark (Demo)',seller:'Nordic Textile Co',items:2500,weight:1700,value:25000,category:'hoodies',date:'2026-06-11'},
  {id:'FLK-2026-1041',buyer:'Primark (Demo)',seller:'North Star Wholesale',items:5000,weight:3500,value:40000,category:'mixed',date:'2026-07-01'},
  {id:'FLK-2026-2037',buyer:'Retro Lab',seller:'North Star Wholesale',items:3600,weight:2400,value:34200,category:'mixed',date:'2026-03-22'},
  {id:'FLK-2026-2038',buyer:'Urban Vintage',seller:'North Star Wholesale',items:4200,weight:2900,value:46200,category:'denim',date:'2026-04-17'},
  {id:'FLK-2026-2039',buyer:'Thread Collective',seller:'North Star Wholesale',items:6500,weight:4400,value:65000,category:'jackets',date:'2026-05-19'},
  {id:'FLK-2026-2040',buyer:'Denim House',seller:'North Star Wholesale',items:2800,weight:2100,value:30800,category:'denim',date:'2026-06-07'}
];

const DEMO_ORDER={buyer:'Primark (Demo)',seller:'North Star Wholesale',items:5000,weight:3500,value:40000,category:'mixed'};
const COMMERCIAL_ASSUMPTIONS={annualCustomerValue:230,acquisitionWithoutFleek:250,acquisitionWithFleek:70,enablementRevenue:40,activationThresholdKg:1000};