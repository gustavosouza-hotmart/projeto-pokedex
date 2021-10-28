declare module '*.svg' {
    const content: any
    export default content
  }

  declare module 'worker-loader!*' {
    export default class WebpackWorker extends Worker {}
  }
  
  declare namespace JSX {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface IntrinsicElements {
      'hot-alert': any
      'hot-avatar': any
      'hot-tag': any
      'hot-popover': any
      'hot-breadcrumb': any
      'hot-breadcrumb-item': any
      'hot-button-group': any
      'hot-card': any
      'hot-card-body': any
      'hot-card-header': any
      'hot-card-footer': any
      'hot-collapse': any
      'hot-content': any
      'hot-content-loader': any
      'hot-date-picker': any
      'hot-date-picker-range': any
      'hot-dropdown': any
      'hot-dropdown-menu-item': any
      'hot-dropdown-menu-header': any
      'hot-dropdown-menu-divider': any
      'hot-context-menu': any
      'hot-header': any
      'hot-icon': any
      'hot-input-group': any
      'hot-list-group': any
      'hot-list-group-item': any
      'hot-loading': any
      'hot-menu': any
      'hot-menu-item': any
      'hot-menu-item-notifications': any
      'hot-modal': any
      'hot-modal-header': any
      'hot-modal-body': any
      'hot-modal-footer': any
      'hot-nav': any
      'hot-nav-item': any
      'hot-notifications': any
      'hot-select': any
      'hot-select-group': any
      'hot-select-option': any
      'hot-select-multiple': any
      'hot-select-multiple-option': any
      'hot-sidebar': any
      'hot-sidebar-header': any
      'hot-sidebar-body': any
      'hot-structure': any
      'hot-toast': any
      'hot-tooltip': any
    }
  }