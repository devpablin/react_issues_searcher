export type LabelType = {
  id: number,
  node_id: string,
  url: string,
  name: string,
  color: string,
  default: boolean,
  description: string
}
export type IssueType = {
  url: string,
  repository_url: string,
  labels_url: string,
  comments_url: string,
  events_url: string,
  html_url: string,
  id: number,
  node_id: string,
  number: number,
  title: string,
  user: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
  },
  labels: LabelType[],
  state: string,
  locked: boolean,
  assignee: string | null,
  assignees: any[],
  milestone: string | null,
  comments: number,
  created_at: string,
  updated_at: string,
  closed_at: string | null,
  author_association: string,
  active_lock_reason: string | null,
  body: string,
  performed_via_github_app: any,
  score: number
}
export type ActionIssues = {
  type: string,
  data: IssueType[],
  total: number
}

export type ActionLoader = {
  type: string,
  data: boolean,
  message: string
}

export type LoaderStateType = {
  loading: boolean,
  message: string
}

export type IssuesStateType = {
  issues: IssueType[],
  total: number
}

export type SearchInputProps = {
  setSearchText:React.Dispatch<React.SetStateAction<string>>
}
