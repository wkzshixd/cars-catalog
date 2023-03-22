import styles from './Home.module.css'
import {cars} from './cars.data.js'

function Home() {
  return (
    <div>
      <h1>
       Cars catalog
      </h1>
      <div>
        {cars.map(car => (
          <div key={car.id} className={styles.item}>
            <div className={styles.image} style={{backgroundImage: `url(${car.image})`}}/>
            <div className={styles.cardInfo}>
              <h2>{car.name}</h2>
              <p>{new Intl.NumberFormat('ru-RU',{
                style: 'currency',
                currency: 'USD',
              }).format(car.price)}
              </p>
              <button>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;