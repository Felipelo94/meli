/**
 * These types represent a subset of MercadoLibre API responses.
 * Feel free to complete missing fields if needed.
 */

type SalePrice = {
  price_id: string;
  amount: number;
  conditions: {
      eligible: boolean;
      context_restrictions: string[];
      start_time: string | null;
      end_time: string | null;
  };
  currency_id: string;
  exchange_rate: unknown | null; 
  payment_method_prices: unknown[]; 
  payment_method_type: string;
  regular_amount: unknown | null; 
  type: string;
  metadata: Record<string, unknown>; 
}

type Shipping = {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: unknown | null; 
  promise: unknown | null; 
  shipping_score: number;
}

type Seller = {
  id: number;
  nickname: string;
}

type AttributeValue = {
  id: string | null;
  name: string;
  struct: { number: number; unit: string } | null;
  source: number;
}

type Attribute =  {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: { number: number; unit: string } | null;
  values: AttributeValue[];
  source: number;
  value_type: string;
}

type Installments =  {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

type DifferentialPricing = {
  id: number;
}

type Result = {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: number;
  official_store_name: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: string | null;
  catalog_listing: boolean;
  discounts: unknown | null; 
  promotions: unknown[]; 
  differential_pricing: DifferentialPricing;
  inventory_id: string;
}

export type SearchApiResponse = {
  site_id: string,
  country_default_time_zone: string,
  query: string,
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  results: Result[];
  sort: Record<string, unknown>; 
  available_sorts: any[];
  filters: any[];
  available_filters: any[];
  pdp_tracking: any;
  user_context: any|null;
};

export type ItemApiResponse = {
  id: string;
  title: string;
  pictures: Array<{ url: string }>;
};

export type ItemDescriptionApiResponse = {
  plain_text: string;
};
