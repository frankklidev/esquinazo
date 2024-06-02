export interface MenuItemDetails {
  price: number;
  image: string;
}

export interface MenuItem {
  [key: string]: MenuItemDetails | MenuItem;
}

export interface MenuData {
  [category: string]: MenuItem;
}
