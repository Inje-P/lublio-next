import styles from "./BBSList.module.css";
import BBSPost from "@/components/BBSPost";

const BBSList = (props) => {
  const posts = props.props;

  return (
    <>
      <div className={styles.bbsList}>
        {posts
          ? posts.map((post, key) => <BBSPost post={post} key={key} />)
          : null}
      </div>
    </>
  );
};

export default BBSList;
