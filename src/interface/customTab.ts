export interface ITab {
  label: string;
  id: number;
  sectionId?: string;
}

export interface ICustomTabProps {
  tabList: ITab[];
  activeTab: ITab;
  onclick: (data: ITab) => void;
}