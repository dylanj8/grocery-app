export type GroceryItem = {
  id: string;
  name: string;
  amount: number;
  bought: boolean;
};

export type GroceryItemForm = {
  id: string;
  name: string;
  amount: number;
  bought: boolean;
  checked: boolean;
};

export type EssentialItem = {
  id: string;
  name: string;
  quantity: number;
};
