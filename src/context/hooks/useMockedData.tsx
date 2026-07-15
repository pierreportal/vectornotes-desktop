import { IDocument, STATUS } from "../../types/document";

const MOCK_DATA: Array<IDocument> = [
  {
    title: "Notes on async Rust",
    content: "Async Rust is blkasjh lksjh aslkhaslhsalkdh asdsddauch",
    tags: [
      { label: "rust", color: "orange" },
      { label: "async", color: "coral" },
    ],
    notebook: "Rust",
    status: STATUS.WIP,
    pinned: false,
  },
  {
    title: "TCP server",
    content: "TCP ove is blkasjh lksjh aslkhaslhsalkdh asdsddauch",
    tags: [
      { label: "networking", color: "cyan" },
      { label: "web", color: "blue" },
    ],
    notebook: "Networking",
    status: STATUS.COMPLETED,
    pinned: true,
  },
  {
    title: "p2p Node for decentralized communication",
    content: "P2P is blkasjh lksjh aslkhaslhsalkdh asdsddauch",
    tags: [
      { label: "rust", color: "orange" },
      { label: "networking", color: "cyan" },
    ],
    notebook: "Rust",
    status: STATUS.TODO,
    pinned: false,
  },
];

const TAGS = [
  { label: "rust", color: "orange" },
  { label: "networking", color: "cyan" },
  { label: "web", color: "blue" },
  { label: "async", color: "coral" },
];

export const useMockedData = () => {
  return { data: MOCK_DATA };
};

export const fetchTags = () => {
  return { tags: TAGS };
};
