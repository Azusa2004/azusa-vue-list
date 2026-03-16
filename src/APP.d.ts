export { }

declare global {
    interface Contact {
        _id: string;
        name: string;
        phone: string;
        email: string;
        school: string;
        address: string;
        gender: string;
        remarks: string
    }
}
