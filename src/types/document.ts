export type Tag = {
  label: string;
  color: string;
};

export const STATUS = {
  WIP: "wip",
  COMPLETED: "completed",
  TODO: "todo",
};

export type Status = (typeof STATUS)[keyof typeof STATUS];

export interface IDocument {
  /*
  TO KEEP ALIGNED WITH MODEL
  */
  title: string;
  content: string;
  tags: Array<Tag>;
  status: Status;
  notebook: string;
  pinned: boolean;
}
