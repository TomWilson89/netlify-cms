// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Repo = {
  id?: string;
  language?: string;
  description?: string;
  html_url?: string;
  name?: string;
};

export type Post = {
  readonly title: string;
  readonly coverImage: string;
  readonly dateFormatted: string;
  readonly bodyHtml: any;
  readonly slug: string;
};
