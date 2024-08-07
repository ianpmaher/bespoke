import menuList from "@/public/menuList";
import { ItemType, CategoryType } from "@/types/MenuTypes"; // Import the ItemType and CategoryType definitions

export default function MenuItem() {
    const jsonData = JSON.parse(JSON.stringify(menuList));
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {jsonData.categories.map((category: CategoryType, index: number) => (
                    <li key={index}>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.items.map((item: ItemType, index: number) => (
                                <li key={index}>
                                    <h4>{item.name}</h4>
                                    <p>Ingredients: {item.ingredients.join(", ")}</p>
                                    <p>Price: ${item.price}</p>
                                    <p>Allergens: {item.allergens.join(", ")}</p>
                                    <p>Gluten Free: {item.gluten_free ? "Yes" : "No"}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
