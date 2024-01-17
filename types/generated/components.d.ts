import type { Schema, Attribute } from '@strapi/strapi';

export interface DocumentAdvancedDocument extends Schema.Component {
  collectionName: 'components_document_advanced_documents';
  info: {
    displayName: 'AdvancedDocument';
    icon: 'layer';
  };
  attributes: {
    DocumentName: Attribute.String & Attribute.Required;
    Document: Attribute.Media & Attribute.Required;
  };
}

export interface MetaContact extends Schema.Component {
  collectionName: 'components_meta_contacts';
  info: {
    displayName: 'Contact';
    icon: 'book';
  };
  attributes: {
    Firstname: Attribute.String & Attribute.Required;
    Lastname: Attribute.String & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
    PhoneNumber: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'document.advanced-document': DocumentAdvancedDocument;
      'meta.contact': MetaContact;
    }
  }
}
