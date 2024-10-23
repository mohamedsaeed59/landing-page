import Card from "../shared/cards/Card";
import styles from './StoreCard.module.css';

const StoreCard = () => {
    
  return (
    <div className={styles.storeCard}>
      <Card
        imageSrc="/images/fashion.webp"
        title="Fashion Store"
        description="Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week."
      />
      <Card
        imageSrc="/images/fashion.webp"
        title="Home Furniture"
        description="Provides superior quality furniture and mattresses at a price that customers can easily afford."
      />
      <Card
        imageSrc="/images/fashion.webp"
        title="Super Gadget Store"
        description="Specialize in selling unique gifts, cool gadgets, outdoor gear, and fabulous toys."
      />
    </div>
  );
};

export default StoreCard;
