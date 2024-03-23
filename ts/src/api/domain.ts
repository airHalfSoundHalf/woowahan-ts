import instance from './instance';
import Instance from './instance';
import { APIResponse } from './types';

type IShopResponse = NonNullable<unknown>;

export const END_POINT = '~';

export const fetchShopStatus = async (): Promise<APIResponse<IShopResponse | null>> => {
  const shopUrl = '~';
  return await instance.get<IShopResponse | null>(END_POINT + shopUrl);
};

export interface MobileApiResponse<Data> {
  data: Data;
  statusCode: string;
  statusMessage: string;
}

interface PriceInfo {
  product: string;
  price: string;
}

export const fetchPriceInfo = (): Promise<MobileApiResponse<PriceInfo>> => {
  const priceUrl = '~';
  return Instance.get(END_POINT + priceUrl);
};
