export type ServiceType =
  | 'generalSetting'
  | 'invoices'
  | 'transactions'
  | 'admin'
  | 'report'
  | 'tripManagement';

export type PermissionType =
  | 'view'
  | 'add'
  | 'edit'
  | 'delete'
  | 'viewDetail'
  | 'updateStore'
  | 'active';

export interface Role {
  module: ServiceType;
  role: PermissionType[];
}
export interface RoutesTabType {
  name: ServiceType | string;
  title?: string;
  path?: string;
  module?: string;
  component?: any;
  isModule?: boolean;
  hidden?: boolean;
  hiddenMenu?: RoutesTabType[];
  subMenu?: RoutesTabType[];
  backStep?: number;
  exact?: boolean;
  listRole?: Role[];
  noStickyHeader?: boolean;
  disableInBreadcrumb?: boolean;
  disableBreadcrumb?: boolean;
}
