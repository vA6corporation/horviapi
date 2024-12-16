export type DataSolution = {
  address: string;
  phone: string;
  title: string;
  decription: string;
  info: {
    businessName: string;
    denomination: string;
    place: string;
    entity: {
      name: string;
      address: string;
      phone: string;
    };
    depositMethod: string;
    datePayment: string;
    baseAmount: string;
    baseBudget: string;
    contractAmount: string;
  };
};
