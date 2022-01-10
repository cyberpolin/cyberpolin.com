import Image from 'next/image'
import styles from '../../styles/BlogList.module.sass'

import cyberpolin from '../../public/img/cyberpolin.jpeg'

const BlogList = () => (
  <>
  <article className={styles.mainArticle}>
    <h2>Titulo</h2>
    <p>texto texto etc...</p>
  </article>
  <main className={styles.main}>
    
   
    <div className={styles.column}>
      {[0,1,2,3,4,5,6,7].map(a => (
        <div key={a} className={styles.postListItem}>
          <div
             style={{
               flex: 4,
               overflow: 'hidden',
               borderRadius: '15px 15px 0 0',
               maxHeight: '150px',
               flexBasis: '300px',
            }}
          >
            <Image className={styles.image} src='https://loremflickr.com/320/240/dog' width='320' height='240' layout="responsive" objectFit="center"/>
          </div>
          <article className={styles.postListArticle}>
            <h2>Titulo</h2>
            <p>texto texto etc...</p>
            <p>texto texto etc...</p>
            <p>texto texto etc...</p>
            <div
              className={styles.footer}
              >
              <Image src={cyberpolin} className={styles.mainPicture} width='40%' height='40%'/>
              <span>Carlos Gonzalez @cyberpolin</span>
            </div>
          </article>
        </div>
      ))}
    </div>
  </main>
  </>
)

export default BlogList