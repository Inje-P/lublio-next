import styles from "./BBSPost.module.css";

const intToString = (num) => {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};

const BBSPost = (value, key) => {
  return (
    <div className={styles.post} key={key}>
      <div className={styles.postTop}>
        <h1>{value.post.title}</h1>
        <p>{value.post.createdAt}</p>
      </div>
      <div className={styles.postCenter}>
        <p>{value.post.content}</p>
      </div>
      <div className={styles.postBottom}>
        <div className={styles.postLikes}>
          <span className="material-symbols-outlined">favorite</span>
          {value.post.likeCount > 10000 ? (
            <p>{intToString(value.post.likeCount)}</p>
          ) : (
            <p>{value.post.likeCount}</p>
          )}
        </div>
        <div className={styles.postViews}>
          <span className="material-symbols-outlined">visibility</span>
          {value.post.viewCount > 10000 ? (
            <p>{intToString(value.post.viewCount)}</p>
          ) : (
            <p>{value.post.viewCount}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BBSPost;
