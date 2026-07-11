const IMPACT_FACTORS={mixed:{label:'Mixed',co2:6,water:1000},denim:{label:'Denim',co2:7.4,water:1500},tshirts:{label:'T-shirts',co2:5.1,water:900},jackets:{label:'Jackets',co2:8.2,water:1200},hoodies:{label:'Hoodies',co2:6.5,water:1100}};

const SEED_ORDERS=[
  {id:'FLK-2026-1037',buyer:'Second Story Vintage',seller:'Vintage World UK',items:45,weight:31,value:405,category:'mixed',date:'2026-03-18'},
  {id:'FLK-2026-1038',buyer:'Second Story Vintage',seller:'Berlin Vintage Supply',items:30,weight:19,value:300,category:'tshirts',date:'2026-04-09'},
  {id:'FLK-2026-1039',buyer:'Second Story Vintage',seller:'Milan Archive Wholesale',items:80,weight:58,value:840,category:'jackets',date:'2026-05-02'},
  {id:'FLK-2026-1040',buyer:'Second Story Vintage',seller:'Nordic Textile Co',items:25,weight:17,value:250,category:'hoodies',date:'2026-06-11'},
  {id:'FLK-2026-1041',buyer:'Second Story Vintage',seller:'North Star Wholesale',items:50,weight:35,value:400,category:'mixed',date:'2026-07-01'},
  {id:'FLK-2026-2037',buyer:'Retro Lab',seller:'North Star Wholesale',items:36,weight:24,value:342,category:'mixed',date:'2026-03-22'},
  {id:'FLK-2026-2038',buyer:'Urban Vintage',seller:'North Star Wholesale',items:42,weight:29,value:462,category:'denim',date:'2026-04-17'},
  {id:'FLK-2026-2039',buyer:'Thread Collective',seller:'North Star Wholesale',items:65,weight:44,value:650,category:'jackets',date:'2026-05-19'},
  {id:'FLK-2026-2040',buyer:'Denim House',seller:'North Star Wholesale',items:28,weight:21,value:308,category:'denim',date:'2026-06-07'}
];

const DEMO_ORDER={buyer:'Second Story Vintage',seller:'North Star Wholesale',items:50,weight:35,value:400,category:'mixed'};
const COMMERCIAL_ASSUMPTIONS={annualCustomerValue:249,enablementRevenue:30,activationThresholdKg:1000};