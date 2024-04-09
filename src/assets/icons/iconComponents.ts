import { ReactComponent as SearchIcon } from "./util/search.svg";
import { ReactComponent as FilledStarIcon } from "./review/filledStar.svg";
import { ReactComponent as OutlinedStarIcon } from "./review/outlinedStar.svg";
import { ReactComponent as ThumbsUpIcon } from "./review/thumbsUp.svg";
import { ReactComponent as ThumbsDownIcon } from "./review/thumbsDown.svg";
import { ReactComponent as ChatIcon } from "./review/chatIcon.svg";
import { ReactComponent as CancelIcon } from "./util/cancel.svg";
import { ReactComponent as BookmarkIcon } from "./util/bookmark.svg";
import { ReactComponent as ShareIcon } from "./util/share.svg";
import { ReactComponent as ThumbsUpUtilIcon } from "./util/thumbsUp.svg";
import { ReactComponent as ThumbsDownUtilIcon } from "./util/thumbsDown.svg";
import { ReactComponent as ChatUtilIcon } from "./util/chat.svg";

const iconComponents = {
  util: {
    SearchIcon,
    FilledStarIcon,
    OutlinedStarIcon,
    CancelIcon,
    BookmarkIcon,
    ShareIcon,
    ThumbsUpUtilIcon,
    ThumbsDownUtilIcon,
    ChatUtilIcon,
  },
  review: {
    ThumbsUpIcon,
    ThumbsDownIcon,
    ChatIcon,
  },
};

export default iconComponents;
