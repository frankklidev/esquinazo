export interface AddOn {
  price: number;
  image: string;
}

export interface MenuItemDetails {
  price: number;
  image: string;
  addOns?: { [key: string]: AddOn };
}

export interface MenuItem {
  [key: string]: MenuItemDetails | MenuItem;
}

export interface MenuData {
  [category: string]: MenuItem;
}
