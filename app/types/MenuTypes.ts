// /Users/ianmaher/bespoke/app/types/MenuTypes.ts

// Define the ItemType interface
interface ItemType {
    id: number;
    name: string;
    price: number;
}

// Define the CategoryType interface
interface CategoryType {
    id: number;
    name: string;
    items: ItemType[];
}

export type { ItemType, CategoryType };