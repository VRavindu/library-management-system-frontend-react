export class MemberModel {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    membershipStartDate: Date;
    status: string;
    borrowedBooksCount: string;

    constructor(id: number, name: string, email: string, phoneNumber: string, membershipStartDate: Date, status: string, borrowedBooksCount: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.membershipStartDate = membershipStartDate;
        this.status = status;
        this.borrowedBooksCount = borrowedBooksCount;
    }
}
