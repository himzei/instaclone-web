import { useQuery } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
      isLiked
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 10px;
`;

const PhotoFile = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const PhotoData = styled.div`
  padding: 10px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>

          <PhotoFile src={photo.file} />
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction>
                  <FontAwesomeIcon
                    style={{ color: photo.isLiked ? "tomato" : "inherit" }}
                    size={"lg"}
                    icon={photo.isLiked ? SolidHeart : faHeart}
                  />
                </PhotoAction>
                <PhotoAction>
                  <FontAwesomeIcon size={"lg"} icon={faComment} />
                </PhotoAction>
                <PhotoAction>
                  <FontAwesomeIcon size={"lg"} icon={faPaperPlane} />
                </PhotoAction>
              </div>
              <div>
                <PhotoActions>
                  <FontAwesomeIcon size={"lg"} icon={faBookmark} />
                </PhotoActions>
              </div>
            </PhotoActions>
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </div>
  );
}

export default Home;
