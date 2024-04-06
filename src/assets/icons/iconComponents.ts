import { ReactComponent as SearchIcon } from "./util/search.svg";
import { ReactComponent as FilledStarIcon } from "./review/filledStar.svg";
import { ReactComponent as OutlinedStarIcon } from "./review/outlinedStar.svg";
import { ReactComponent as ThumbsUpIcon } from "./review/thumbsUp.svg";
import { ReactComponent as ThumbsDownIcon } from "./review/thumbsDown.svg";
import { ReactComponent as ChatIcon } from "./review/chatIcon.svg";

const iconComponents = {
  util: {
    SearchIcon,
    FilledStarIcon,
    OutlinedStarIcon,
  },
  review: {
    ThumbsUpIcon,
    ThumbsDownIcon,
    ChatIcon,
  },
};

export default iconComponents;
