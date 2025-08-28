import type { Schema, Struct } from '@strapi/strapi';

export interface StatisticStatisticItem extends Struct.ComponentSchema {
  collectionName: 'components_statistic_statistic_items';
  info: {
    displayName: 'Statistic Item';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'statistic.statistic-item': StatisticStatisticItem;
    }
  }
}
