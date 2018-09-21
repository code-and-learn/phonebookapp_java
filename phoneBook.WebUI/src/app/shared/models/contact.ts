
export class Contact
{
    id: number;
    contactName: string;
    company: string;
    title: string;
    address: string;
    isFavorite: boolean;
    userId: number;
    isInGroup: boolean;

    ContactList : Array<ContactInfo>
}

export class ContactInfo
{
    id: number;
    contactInfo: string;
    contactTypeId: number;
    phoneBookId: string;
    contactTypeName: string;
}

export class ContactType
{
    id: number;
    name: string;
}