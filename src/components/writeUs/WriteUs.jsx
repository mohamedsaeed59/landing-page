import Image from 'next/image';
import styles from './writeUs.module.css';
import backgroundImage from '/src/assets/images/background1.jpeg';

const WriteUs = () => {
    return (
        <div className={styles.writeUs}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Write Us</h2>
                <form>
                    <div className={styles.inputField}>
                        <input className={styles.email} type="email" placeholder="Enter your email" />
                    </div>
                    <div className={styles.inputField}>
                        <textarea className={styles.message} placeholder="Enter your message"></textarea>
                    </div>
                    <button className={styles.sendButton}>Send Your Message</button>
                </form>
            </div>
            <div className={styles.imageContainer}>
                <Image src={backgroundImage} alt="Digital Marketer" className={styles.person} width={500} height={400} />
            </div>
        </div>
    );
}

export default WriteUs;